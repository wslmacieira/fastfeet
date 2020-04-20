import React, { useEffect, useRef } from 'react';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';

import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';

import HeaderList from '~/components/HeaderList';
import ActionButton from '~/components/ActionButton';

import Input from '~/components/Form/Input';

import api from '~/services/api';
import history from '~/services/history';

import { Container, ContentList, ActionContent } from './styles';

export default function RecipientForm({ match }) {
  const { id } = match.params;
  const formRef = useRef(null);
  const hasPath = history.location.pathname;

  useEffect(() => {
    async function loadInitialData(recipient_id) {
      if (id) {
        const response = await api.get(`/recipients/${recipient_id}`);

        formRef.current.setData(response.data);
      }
    }
    loadInitialData(id);
  }, [id]);

  async function handleSubmit(data, { reset }) {
    if (id) {
      await api.put(`/recipients/${id}`, {
        name: data.name,
        street: data.street,
        number: data.number,
        complement: data.complement,
        city: data.city,
        state: data.state,
        zip_code: data.zip_code,
      });

      toast.success('Destinatário atualizado!', { autoClose: 2000 });
      setTimeout(() => {
        history.push('/recipients');
      }, 2000);
      return;

    } else {
      await api.post(`recipients`, {
        name: data.name,
        street: data.street,
        number: data.number,
        complement: data.complement,
        city: data.city,
        state: data.state,
        zip_code: data.zip_code,
      });

      toast.success('Destinatário cadastrado!', { autoClose: 2000 });
    }
    setTimeout(() => {
      reset();

    }, 1000)

    console.log(data);
  }
  return (
    <Container>
      <ContentList>
        <HeaderList title={ hasPath === '/recipients/new' ? 'Cadastro de destinatários' : 'Edição de destinatário'} />
        <ActionContent>
          <ActionButton
            title="VOLTAR"
            Icon={MdKeyboardArrowLeft}
            background="#ccc"
            onClick={() => history.push('/recipients')}
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
        <label>
          Nome
          <Input name="name" placeholder="Digite seu nome " />
        </label>
        <div className="input-group">
          <label style={{ width: '56%' }}>
            Rua
            <Input name="street" placeholder="Digite sua rua" />
          </label>
          <label style={{ width: '20%' }}>
            Número
            <Input name="number" placeholder="Digite seu número" />
          </label>
          <label style={{ width: '20%' }}>
            Complemento
            <Input name="complement" placeholder="Digite seu complemento" />
          </label>
        </div>
        <div className="input-group">
          <label style={{ width: '32%' }}>
            Cidade
            <Input name="city" placeholder="Digite sua cidade" />
          </label>
          <label style={{ width: '32%' }}>
            Estado
            <Input name="state" placeholder="Digite seu estado" />
          </label>
          <label style={{ width: '32%' }}>
            CEP
            <Input name="zip_code" placeholder="Digite seu cep" />
          </label>
        </div>
      </Form>
    </Container>
  );
}
