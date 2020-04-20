import React from 'react';
import { useSelector } from 'react-redux';
import { useRoute, useNavigation } from '@react-navigation/native';
import { parseISO, format } from 'date-fns';
import { StatusBar, Alert } from 'react-native';

import Header from '~/components/Header';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import {
  Container,
  HeaderCard,
  TitleCard,
  LabelText,
  SpanText,
  InfoCard,
  SituacaoCard,
  Select,
  SelectOption,
  OptionText,
} from './styles';

export default function DeliveryDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const auth = useSelector(state => state.auth);
  const { delivery } = route.params;
  const {
    name,
    street,
    number,
    city,
    complement,
    state,
    zip_code,
  } = delivery.recipient;

  async function handleDeliveryWithdraw() {
    async function delievryWithdraw() {
      try {
        await api.put(`/deliveryman/${auth.id}/delivery/${delivery.id}`, {
          start_date: new Date(),
        });

        navigation.navigate('Entregas');
      } catch (err) {
        Alert.alert('Horário de retirda inválida.');
      }
    }

    Alert.alert(
      'Confirmação de retirada',
      'Deseja realizar a retirada desta encomenda?',
      [
        {
          text: 'Cancelar',
          style: 'destructive',
        },
        {
          text: 'Confirmar',
          onPress: delievryWithdraw,
        },
      ],
      {
        cancelable: false,
      }
    );
  }

  return (
    <Container>
      <StatusBar backgroundColor="#7D40E7" barStyle="light-content" />
      <Header title="Detalhes da encomenda" />
      <InfoCard>
        <HeaderCard>
          <Icon name="local-shipping" color="#7D40E7" size={24} />
          <TitleCard>Informações da entrega</TitleCard>
        </HeaderCard>

        <LabelText>Destinátario</LabelText>
        <SpanText>{name}</SpanText>

        <LabelText>Endereço de entrega</LabelText>
        <SpanText>
          {street}, {number} {complement ? ` - ${complement}` : ''}, {city} -{' '}
          {state}, {zip_code}
        </SpanText>

        <LabelText>Produto</LabelText>
        <SpanText>{delivery.product}</SpanText>
      </InfoCard>

      <SituacaoCard>
        <HeaderCard>
          <Icon name="event" color="#7D40E7" size={24} />
          <TitleCard>Situação da entrega</TitleCard>
        </HeaderCard>

        <LabelText>Produto</LabelText>
        <SpanText>{delivery.status}</SpanText>
        <LabelText>Data de Retirada</LabelText>
        <SpanText>
          {delivery.start_date
            ? format(parseISO(delivery.start_date), 'dd/MM/yyyy')
            : '--/--/----'}
        </SpanText>
        <LabelText>Data de entrega</LabelText>
        <SpanText>
          {delivery.end_date
            ? format(parseISO(delivery.end_date), 'dd/MM/yyyy')
            : '--/--/----'}
        </SpanText>
      </SituacaoCard>

      <Select>
        <SelectOption
          onPress={() =>
            navigation.navigate('InformProblem', { delivery_id: delivery.id })
          }
        >
          <Icon name="highlight-off" color="#E74040" size={24} />
          <OptionText>Informar{`\n`}Problemas</OptionText>
        </SelectOption>
        <SelectOption
          onPress={() =>
            navigation.navigate('Problems', { delivery_id: delivery.id })
          }
        >
          <Icon name="info-outline" color="#E7BA40" size={24} />
          <OptionText>Visualizar{`\n`}Problemas</OptionText>
        </SelectOption>
        <SelectOption onPress={() =>
            navigation.navigate('DeliveryConfirm', { delivery_id: delivery.id })
          }>
          <Icon name="check-circle" color="#7D40E7" size={24} />
          <OptionText>Confirmar{`\n`}Entrega</OptionText>
        </SelectOption>
      </Select>
    </Container>
  );
}
