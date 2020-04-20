import React, { useEffect, useState } from 'react';
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
import cols from '~/utils/coluns';

import DeliveryItem from '~/pages/Delivery/DeliveryItem';

import { Container, ActionContent } from './styles';

import api from '~/services/api';
import history from '~/services/history';

export default function Delivery() {
  const [deliveries, setDeliveries] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('deliveries', {
        params: {
          page,
          product: '',
        },
      });
      setDeliveries(response.data);
    }
    loadDeliveries();
  }, [page]);

  async function handleSearch(e) {
    const response = await api.get('/deliveries', {
      params: {
        product: e.target.value.trim(),
        page,
      },
    });
    setPage(1);
    setDeliveries(response.data);
  }

  async function handleDelete(id) {
    const confirm = window.confirm(
      'Você deseja excluir essa encomenda!'
    );

    if (!confirm) {
      toast.error('Encomenda não excluida!');
      return;
    }

    await api.delete(`deliveries/${id}`);

    setDeliveries(deliveries.filter(delivery => delivery.id !== id));

    toast.success('Encomenda excluida!');
  }

  return (
    <Container>
      <HeaderList title="Gerenciando encomendas" />
      <ActionContent>
        <SearchBox
          placeholder="Buscar por encomendas"
          onChange={handleSearch}
        />
        <ActionButton
          title="CADASTRAR"
          Icon={MdAdd}
          background="#7D40E7"
          onClick={() => history.push('deliveries/new')}
        />
      </ActionContent>
      <table>
        <tbody>
          <tr>
            {cols.delivery.map(col => (
              <th key={col}>{col}</th>
            ))}
          </tr>
          {deliveries.map(delivery => (
            <DeliveryItem key={delivery.id} data={delivery} status={delivery.status}>
              <button
                type="button"
                onClick={() => history.push(`/deliveries/edit/${delivery.id}`)}
              >
                <MdEdit color="#4D85EE" size={20} />
                <span>Editar</span>
              </button>
              <button type="button" onClick={() => handleDelete(delivery.id)}>
                <MdDeleteForever color="#DE3B3B" size={20} />
                <span>Deletar</span>
              </button>
            </DeliveryItem>
          ))}
        </tbody>
      </table>
      <Paginate
        prev={page === 1}
        next={deliveries.length < 6}
        page={page}
        IconBack={MdKeyboardArrowLeft}
        IconNext={MdKeyboardArrowRight}
        handleBack={() => setPage(page - 1)}
        handleNext={() => setPage(page + 1)}
      />
    </Container>
  );
}
