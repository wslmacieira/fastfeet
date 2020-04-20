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

import DeliverymanItem from '~/pages/Deliveryman/DeliverymanItem';

import { Container, ActionContent } from './styles';

import api from '~/services/api';
import history from '~/services/history';
import cols from '~/utils/coluns';

export default function Deliverymen() {
  const [deliverymen, setDeliverymen] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadDeliverymen() {
      const response = await api.get('deliverymen', {
        params: {
          page,
          name: '',
        },
      });
      setDeliverymen(response.data);
    }
    loadDeliverymen();
  }, [page]);

  async function handleSearch(e) {
    const response = await api.get('/deliverymen', {
      params: {
        name: e.target.value.trim(),
        page,
      },
    });
    setPage(1);
    setDeliverymen(response.data);
  }

  async function handleDelete(id) {
    const confirm = window.confirm('Você deseja excluir esse entregador!');

    if (!confirm) {
      toast.error('Entregador não excluido!');
      return;
    }

    await api.delete(`deliverymen/${id}`);

    setDeliverymen(deliverymen.filter(deliveryman => deliveryman.id !== id));

    toast.success('Entregador excluido!');
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
          onClick={() => history.push('/deliverymen/new')}
          title="CADASTRAR"
          background="#7d40e7"
        />
      </ActionContent>
      <table>
        <tbody>
          <tr>
            {cols.deliveryman.map(col => (
              <th key={col}>{col}</th>
            ))}
          </tr>
          {deliverymen.map(deliveryman => (
            <DeliverymanItem key={deliveryman.id} data={deliveryman}>
              <button
                type="button"
                onClick={() =>
                  history.push(`/deliverymen/edit/${deliveryman.id}`)
                }
              >
                <MdEdit color="#4D85EE" size={20} />
                <span>Editar</span>
              </button>
              <button
                type="button"
                onClick={() => handleDelete(deliveryman.id)}
              >
                <MdDeleteForever color="#DE3B3B" size={20} />
                <span>Deletar</span>
              </button>
            </DeliverymanItem>
          ))}
        </tbody>
      </table>
      <Paginate
        prev={page === 1}
        next={deliverymen.length < 6}
        page={page}
        IconBack={MdKeyboardArrowLeft}
        IconNext={MdKeyboardArrowRight}
        handleBack={() => setPage(page - 1)}
        handleNext={() => setPage(page + 1)}
      />
    </Container>
  );
}
