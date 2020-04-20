import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO, format } from 'date-fns';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Left,
  HeaderList,
  InfoStatus,
  InfoHeader,
  DetailsLink,
  InfoData,
  Status,
  Details,
  InfoDetails,
} from './styles';

export default function Deliveries({ data }) {
  const navigation = useNavigation();
  return (
    <Container>
      <Left>
        <Icon name="local-shipping" size={24} color="#7D40E7" />
        <HeaderList>Encomenda {data.id}</HeaderList>
      </Left>
      <Status>
        <InfoStatus>Aguardando Retirada</InfoStatus>
        <InfoStatus>Retirada</InfoStatus>
        <InfoStatus>Entregue</InfoStatus>
      </Status>
      <Details>
        <InfoDetails>
          <InfoHeader>Data</InfoHeader>
          <InfoData>{format(parseISO(data.created_at), 'dd/MM/yyyy')}</InfoData>
        </InfoDetails>
        <InfoDetails>
          <InfoHeader>Cidade</InfoHeader>
          <InfoData>{data.recipient.city}</InfoData>
        </InfoDetails>
        <InfoDetails>
          <InfoHeader></InfoHeader>
          <DetailsLink
            onPress={() => navigation.navigate('Detalhes', { delivery: data })}
          >
            Ver detalhes
          </DetailsLink>
        </InfoDetails>
      </Details>
    </Container>
  );
}
