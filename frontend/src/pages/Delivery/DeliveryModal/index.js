import React from 'react';
import { parseISO, format } from 'date-fns';

import SignatureImg from '~/assets/signature.png';

import { ModalContent, Container, ContainerBlack } from './styles';

export default function Modal({ data }) {
  const {
    recipient: { street, number, city, state, zip_code },
  } = data;

  console.log(data)

  return (
    <>
      <ContainerBlack />
      <Container>
        <ModalContent>
          <strong>
            Informações da encomenda: <span>{data.id}</span>
          </strong>
          <span>
            {street}, {number}
          </span>
          <span>
            {city} - {state}
          </span>
          <span>{zip_code}</span>

          <strong>Datas</strong>
          <span>
            <strong>Retirada:</strong>{' '}
            {data.start_date
              ? format(parseISO(data.start_date), 'dd/MM/yyyy')
              : null}
          </span>
          <span>
            <strong>Entrega:</strong>{' '}
            {data.end_date
              ? format(parseISO(data.end_date), 'dd/MM/yyyy')
              : null}
          </span>

          <div className="signature">
            <strong>Assinatura do destinatário</strong>
            <img src={SignatureImg} alt="Assinatura do entregador" />
          </div>
        </ModalContent>
      </Container>
    </>
  );
}
