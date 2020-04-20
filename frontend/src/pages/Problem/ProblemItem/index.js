import React, { useState } from 'react';

import {
  MdVisibility,
} from 'react-icons/md';

import ActionMenu from '~/components/ActionMenu';

import Modal from '~/pages/Problem/ProblemModal';

import api from '~/services/api';

import { Container } from './styles';

export default function ProblemItem({ data: problem, children }) {
  const [showModal, setShowModal] = useState(false);


  async function handleShowDelivery(id) {
    await api.get(`delivery/${id}/problems`);
    setShowModal(!showModal);
  }

  return (
    <Container key={problem.id}>
      <td style={{ width: '20%' }}>
        {`#${problem.id}`}
        {showModal ? (
          <Modal
            key={problem.id}
            data={problem}
            onClick={handleShowDelivery}
            showModal={showModal}
          />
        ) : null}
      </td>
      <td>{problem.description}</td>
      <td style={{ width: '10%' }}>
        <ActionMenu problem>
          {' '}
          <button
            type="button"
            data={problem}
            onClick={() => handleShowDelivery(problem.id)}
          >
            <MdVisibility color="#8E5BE8" size={20} />
            <span>Visualizar</span>
          </button>
          {children}
        </ActionMenu>
      </td>
    </Container>
  );
}
