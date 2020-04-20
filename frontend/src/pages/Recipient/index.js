import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import {
  MdAdd,
  MdEdit,
  MdDeleteForever,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from 'react-icons/md';

import HeaderList from '~/components/HeaderList';
import SearchBox from '~/components/SearchBox';
import ActionButton from '~/components/ActionButton';
import Paginate from '~/components/Paginate';

import RecipientItem from '~/pages/Recipient/RecipientItem';

import { Container, ActionContent } from './styles';

import api from '~/services/api';
import history from '~/services/history';
import cols from '~/utils/coluns';

export default function Recipient() {
  const [recipients, setRecipients] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get('recipients', {
        params: {
          page,
          name: '',
        },
      });
      setRecipients(response.data);
    }
    loadRecipients();
  }, [page]);

  async function handleSearch(e) {
    const response = await api.get('/recipients', {
      params: {
        name: e.target.value.trim(),
        page,
      },
    });
    setPage(1);
    setRecipients(response.data);
  }

  async function handleDelete(id) {
    const confirm = window.confirm('Você deseja excluir esse destinatário!');

    if (!confirm) {
      toast.error('Destinatário não excluido!');
      return;
    }

    await api.delete(`recipients/${id}`);

    setRecipients(recipients.filter(recipient => recipient.id !== id));

    toast.success('Destinatário excluido!');
  }

  return (
    <Container>
      <HeaderList title="Gerenciando entregadores" />
      <ActionContent>
        <SearchBox
          placeholder="Buscar por entregadores"
          type="text"
          onChange={handleSearch}
        />
        <ActionButton
          Icon={MdAdd}
          type="button"
          onClick={() => history.push('/recipients/new')}
          title="CADASTRAR"
          background="#7d40e7"
        />
      </ActionContent>
      <table>
        <thead>
          <tr>
            {cols.recipient.map(col => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {recipients.map(recipient => (
            <RecipientItem key={recipient.id} data={recipient}>
              <button
                type="button"
                onClick={() => history.push(`/recipients/edit/${recipient.id}`)}
              >
                <MdEdit color="#4D85EE" size={20} />
                <span>Editar</span>
              </button>
              <button type="button" onClick={() => handleDelete(recipient.id)}>
                <MdDeleteForever color="#DE3B3B" size={20} />
                <span>Deletar</span>
              </button>
            </RecipientItem>
          ))}
        </tbody>
      </table>
      <Paginate
        prev={page === 1}
        next={recipients.length < 6}
        page={page}
        IconBack={MdKeyboardArrowLeft}
        IconNext={MdKeyboardArrowRight}
        handleBack={() => setPage(page - 1)}
        handleNext={() => setPage(page + 1)}
      />
    </Container>
  );
}
