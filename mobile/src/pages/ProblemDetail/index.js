import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { StatusBar } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import Header from '~/components/Header';
import Problems from '~/components/Problems';

import { Container, List, Title } from './styles';

import api from '~/services/api';

export default function ProblemDetail() {
  const route = useRoute();
  const { delivery_id } = route.params;
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function  loadProblems() {

      const response = await api.get(`delivery/${delivery_id}/problems`);

      setProblems(response.data);
    }

    loadProblems();
  }, []);
  return (
    <Container>
      <Header title="Vizualizar problemas" />
      <StatusBar backgroundColor="#7D40E7" barStyle="light-content" />
      <Title>Encomenda 01</Title>
      <List
        data={problems}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Problems data={item} />}
      />
    </Container>
  );
}
