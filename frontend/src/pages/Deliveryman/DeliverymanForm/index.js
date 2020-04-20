import React, { useRef, useEffect } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';

import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';

import HeaderList from '~/components/HeaderList';
import ActionButton from '~/components/ActionButton';

import AvatarInput from '~/components/Form/InputFile';
import Input from '~/components/Form/Input';

import api from '~/services/api';
import history from '~/services/history';

import { Container, ContentList, ActionContent } from './styles';

export default function DeliverymanForm({ match }) {
  const { id } = match.params;
  const formRef = useRef(null);
  const hasPath = history.location.pathname;

  console.log(hasPath);

  useEffect(() => {
    async function loadInitialData(deliverymanId) {
      if (id) {
        const response = await api.get(`/deliverymen/${deliverymanId}`);
        const urlPath =
          response.data.avatar == null
            ? 'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif'
            : response.data.avatar.url;
        formRef.current.setData(response.data);
        formRef.current.setFieldValue('avatar', urlPath);
      }
    }
    loadInitialData(id);
  }, [id]);

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        avatar_id: Yup.number(),
        name: Yup.string().required('O campo nome é obrigatório'),
        email: Yup.string().email().required('O campo email é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const fileData = new FormData();

      fileData.append('file', data.avatar);

      const response = data.avatar ? await api.post('files', fileData) : null;

      if (id) {
        await api.put(`/deliverymen/${id}`, {
          name: data.name,
          email: data.email,
          avatar_id: response.data.id || null,
        });

        toast.success('Entregador atualizado');
        return;

      } else {
        console.log(data);
        await api.post('deliverymen', {
          name: data.name,
          email: data.email,
          avatar_id: response.data.id || null,
        });

        toast.success('Entregador cadastrado!');
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
            hasPath === '/deliverymen/new'
              ? 'Cadastro de entregadores'
              : 'Edição de entregador'
          }
        />
        <ActionContent>
          <ActionButton
            title="VOLTAR"
            Icon={MdKeyboardArrowLeft}
            background="#ccc"
            onClick={() => history.push('/deliverymen')}
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
        <label className="avatar-input" htmlFor="avatar">
          <AvatarInput name="avatar" />
        </label>
        <label htmlFor="">
          Nome
          <Input name="name" placeholder="John Doe" />
        </label>
        <label htmlFor="">
          Email
          <Input type="email" name="email" placeholder="example@rocketseat.com" />
        </label>
      </Form>
    </Container>
  );
}
