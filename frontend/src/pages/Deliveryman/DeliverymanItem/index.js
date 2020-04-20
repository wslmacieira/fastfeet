import React from 'react';

import ActionMenu from '~/components/ActionMenu';

import { Container } from './styles';

export default function Item({ data: deliveryman, children }) {

  return (
    <Container>
            <td>{`#${deliveryman.id}`}</td>
            <td>
              <img
                src={
                  deliveryman.avatar
                    ? deliveryman.avatar.url
                    : 'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif'
                }
                alt="Avatar do entregador"
              />
            </td>
            <td>{deliveryman.name}</td>
            <td className="email">{deliveryman.email}</td>
            <td>
              <ActionMenu>
                {children}
              </ActionMenu>
            </td>
    </Container>
  );
}
