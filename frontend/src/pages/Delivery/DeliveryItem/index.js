import React, { useState } from 'react';

import { MdFiberManualRecord, MdVisibility } from 'react-icons/md';

import ActionMenu from '~/components/ActionMenu';
import Modal from '../DeliveryModal';

import { Container } from './styles';

import noAvatarImg from '~/assets/no-avatar.png';

import api from '~/services/api';

export default function Item({ data: delivery, children, status }) {
  const [showModal, setShowModal] = useState(false);

  async function handleShowDelivery(id) {
    await api.get(`deliveries/${id}`);
    setShowModal(!showModal);
  }

  return (
    <Container key={delivery.id}>
      <td>
        {`#${delivery.id}`}
        {showModal ? (
          <Modal
            key={delivery.id}
            data={delivery}
            onClick={handleShowDelivery}
            showModal={showModal}
          />
        ) : null}{' '}
      </td>
      <td>{delivery.recipient.name}</td>
      <td className="avatar-image">
        <img
          src={
            delivery.deliveryman.avatar
              ? delivery.deliveryman.avatar.url
              : noAvatarImg
          }
          alt={delivery.deliveryman.name}
        />
        {delivery.deliveryman.name}
      </td>
      <td>{delivery.recipient.city}</td>
      <td>{delivery.recipient.state}</td>
      <td className="status" status={status}>
        <span>
          <MdFiberManualRecord />
          {delivery.status}
        </span>
      </td>
      <td>
        {' '}
        <ActionMenu>
          <button
            type="button"
            data={delivery}
            onClick={() => handleShowDelivery(delivery.id)}
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
