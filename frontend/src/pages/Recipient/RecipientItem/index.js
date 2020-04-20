import React from 'react';

import ActionMenu from '~/components/ActionMenu';

import { Container } from './styles';

export default function Item({ data: recipient, children }) {

  return (
    <Container>
      <td>{`#${recipient.id}`}</td>
      <td>{recipient.name}</td>
      <td>
        {recipient.street}, {recipient.number}{' '}
        {recipient.complement ? `- ${recipient.complement}` : ''},{' '}
        {recipient.city} - {recipient.state}
      </td>
      <td>
        <ActionMenu>{children}</ActionMenu>
      </td>
    </Container>
  );
}
