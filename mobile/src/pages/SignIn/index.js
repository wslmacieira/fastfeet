import React, { useState } from 'react';
import { Image, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import logo from '~/assets/logo.png';

import { signInRequest } from '~/store/modules/auth/actions';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();

  const [deliverymanId, setDeliverymanId] = useState('');

  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(deliverymanId));
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
      <Image source={logo} />
      <Form>
        <FormInput
          value={deliverymanId}
          onChangeText={setDeliverymanId}
          onSubmitEditing={handleSubmit}
          placeholder="Informe seu ID no cadastro"
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="number-pad"
          returnKeyType="send"
        />

        <SubmitButton
          loading={loading}
          onPress={handleSubmit}
          style={{ marginTop: 16 }}
        >
          Entrar no sistema
        </SubmitButton>
      </Form>
    </Container>
  );
}
