import React from 'react';

import { ModalContent, Container, ContainerBlack } from './styles';

export default function ProblemModal({ data }) {
  return (
    <>
      <ContainerBlack />
      <Container>
        <ModalContent>
          <strong>
            VISUALIZAR PROBLEMA:<span> {data.id}</span>
          </strong>
          <span>
            {data.description}
          </span>
        </ModalContent>
      </Container>
    </>
  );
}
