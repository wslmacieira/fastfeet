import React, { useRef, useState } from 'react';
import { Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import { Form } from '@unform/mobile';

import Header from '~/components/Header'

import api from '~/services/api';

import {
  Container,
  Content,
  TextArea,
  SubmitButton,
} from './styles';

export default function Problem() {
  const route = useRoute();
  const navigation = useNavigation();
  const [problem, setProblem] = useState('');
  const [loading, setLoading] = useState(false);
  const { delivery_id } = route.params;

  async function handleSubmit() {
    setLoading(true);
    try {
      await api.post(`/delivery/${delivery_id}/problems`, {
        description: problem,
      });

      setProblem('');
      Alert.alert('Problema cadastrado com sucesso!');
      navigation.navigate('Detalhes');
    } catch (err) {
      Alert.alert('erro tente novamente!');
    }
  }
  return (
    <Container>
       <Header title="Informar problema" />
      <Content>
        <Form>
          <TextArea
            autoCapitalize="none"
            underlineColorAndroid="transparent"
            placeholder="Inclua aqui o problema que ocorreu na entrega."
            autoCorrect={false}
            multiline
            numberOfLines={10}
            returnKeyType="send"
            value={problem}
            onChangeText={setProblem}
            onSubmitEditing={handleSubmit}
          />
        </Form>
        <SubmitButton loading={loading} onPress={handleSubmit}>
          Enviar
        </SubmitButton>
      </Content>
    </Container>
  );
}
