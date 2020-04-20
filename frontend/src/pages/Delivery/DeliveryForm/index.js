import React, { useState, useEffect, useRef } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';

import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';

import HeaderList from '~/components/HeaderList';
import ActionButton from '~/components/ActionButton';

import Input from '~/components/Form/Input';
import AsyncSelectInput from '~/components/Form/AsyncSelectInput';

import { Container, ActionContent, ContentList } from './styles';
import customStyles from '~/utils/customStyles';

import api from '~/services/api';
import history from '~/services/history';

export default function DeliveryForm({ match }) {
  const hasPath = history.location.pathname;
  const { id } = match.params;
  const formRef = useRef(null);

  const [recipientsOptions, setRecipientOptions] = useState('');
  const [deliverymenOptions, setDeliverymenOptions] = useState('');

  useEffect(() => {
    async function loadInitialData(delivery_id) {
      if (id) {
        const response = await api.get(`/deliveries/${delivery_id}`);
        const { recipient, deliveryman } = response.data;
        formRef.current.setData(response.data);
        formRef.current.setFieldValue('recipient_id', {
          value: recipient.id,
          label: recipient.name,
        });
        formRef.current.setFieldValue('deliveryman_id', {
          value: deliveryman.id,
          label: deliveryman.name,
        });
        console.log(response.data.recipient);
      }

      const recipients = await api.get('/recipients', {
        params: {
          name: '',
        },
      });

      const deliverymen = await api.get('/deliverymen', {
        params: {
          name: '',
        },
      });

      const recipientData = recipients.data.map(recipient => ({
        value: recipient.id,
        label: recipient.name,
      }));

      const deliverymanData = deliverymen.data.map(deliveryman => ({
        value: deliveryman.id,
        label: deliveryman.name,
      }));

      setRecipientOptions(recipientData);
      setDeliverymenOptions(deliverymanData);
    }
    loadInitialData(id);
  }, [id]);

  const filterRecipient = inputValue => {
    return recipientsOptions.filter(i =>
      i.label.toLowerCase().includes('' || inputValue.toLowerCase())
    );
  };
  const filterDeliveryman = inputValue => {
    return deliverymenOptions.filter(i =>
      i.label.toLowerCase().includes('' || inputValue.toLowerCase())
    );
  };

  const recipientOptions = inputValue =>
    new Promise(resolve => {
      resolve(filterRecipient(inputValue));
    });

  const deliverymanOptions = inputValue =>
    new Promise(resolve => {
      resolve(filterDeliveryman(inputValue));
    });

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        recipient_id: Yup.string().required(
          'O campo destinatário é obrigatório'
        ),
        deliveryman_id: Yup.string().required(
          'O campo entregador é obrigatório'
        ),
        product: Yup.string().required('O campo produto é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      if (id) {
        await api.put(`/deliveries/${id}`, {
          recipient_id: data.recipient_id,
          deliveryman_id: data.deliveryman_id,
          product: data.product,
        });

        toast.success('Encomenda atualizada');
        return;

      } else {
        console.log(data);
        await api.post('deliveries', {
          recipient_id: data.recipient_id,
          deliveryman_id: data.deliveryman_id,
          product: data.product,
        });

        toast.success('Encomenda cadastrada!');
      }

    } catch (err) {
      toast.error(`${err.errors}`);
      return;
    }
    formRef.current.reset();
  }

  return (
    <Container>
      <ContentList>
        <HeaderList
          title={
            hasPath === '/deliveries/new'
              ? 'Cadastro de encomendas'
              : 'Edição de encomenda'
          }
        />
        <ActionContent>
          <ActionButton
            title="VOLTAR"
            Icon={MdKeyboardArrowLeft}
            background="#ccc"
            onClick={() => history.push('/deliveries')}
          />
          <ActionButton
            title="SALVAR"
            Icon={MdDone}
            background="#7D40E7"
            onClick={() => formRef.current.submitForm()}
          />
        </ActionContent>
      </ContentList>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <div className="inputGroup">
          <label htmlFor="">
            Destinatário
            <AsyncSelectInput
              type="text"
              name="recipient_id"
              placeholder="Destinatários"
              noOptionsMessage={() => 'Nenhum destinatário encontrado'}
              loadOptions={recipientOptions}
              defaultOptions
              styles={customStyles}
            />
          </label>
          <label htmlFor="">
            Entregador
            <AsyncSelectInput
              type="text"
              name="deliveryman_id"
              placeholder="Entregadores"
              noOptionsMessage={() => 'Nenhum entregador encontrado'}
              loadOptions={deliverymanOptions}
              styles={customStyles}
            />
          </label>
        </div>

        <label htmlFor="">
          Nome do Produto
          <Input name="product" placeholder="Cadastre seu produto" />
        </label>
      </Form>
    </Container>
  );
}
