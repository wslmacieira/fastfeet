import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import {
  MdDeleteForever,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from 'react-icons/md';

import HeaderList from '~/components/HeaderList';
import Paginate from '~/components/Paginate';

import ProblemItem from '~/pages/Problem/ProblemItem';

import { Container } from './styles';

import api from '~/services/api';
import cols from '~/utils/coluns';

export default function Problem() {
  const [problems, setProblems] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get('delivery/problems', {
        params: {
          page,
        },
      });
      setProblems(response.data);
    }
    loadProblems();
  }, [page]);

  async function handleDelete(id) {
    const confirm = window.confirm('Você deseja cancelar essa encomenda!');

    if (!confirm) {
      toast.error('Encomenda não cancelada!');
      return;
    }
    await api.delete(`problem/${id}/cancel-delivery`);
    setProblems(problems.filter(problem => problem.id !== id));

    toast.success('Encomenda cancelada!');
  }

  return (
    <Container>
      <HeaderList title="Gerenciando entregadores" />
      <table>
        <tbody>
          <tr>
            {cols.problem.map(col => (
              <th key={col}>{col}</th>
            ))}
          </tr>
          {problems.map(problem => (
            <ProblemItem key={problem.id} data={problem}>
              <button type="button" onClick={() => handleDelete(problem.id)}>
                <MdDeleteForever color="#DE3B3B" size={20} />
                <span>Deletar</span>
              </button>
            </ProblemItem>
          ))}
        </tbody>
      </table>
      <Paginate
        prev={page === 1}
        next={problems.length < 6}
        page={page}
        IconBack={MdKeyboardArrowLeft}
        IconNext={MdKeyboardArrowRight}
        handleBack={() => setPage(page - 1)}
        handleNext={() => setPage(page + 1)}
      />
    </Container>
  );
}
