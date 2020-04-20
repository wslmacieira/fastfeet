import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';

import api from '~/services/api';

import {
  Container,
  Header,
  Profile,
  ProfileAvatar,
  ProfileWelcome,
  TextWelcome,
  TextName,
  List,
  HeaderList,
  TextOptions,
  TextLink,
} from './styles';

import avatar from '~/assets/no-avatar.png';

import Deliveries from '~/components/Deliveries';

import { signOut } from '~/store/modules/auth/actions';

export default function Dashboard() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.user.profile);
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    async function loadDeliveries() {
      if (!auth.id) return;

      const response = await api.get(`deliveryman/${auth.id}/deliveries`);

      setDeliveries(response.data);
    }

    loadDeliveries();
  }, []);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Header>
        <Profile>
          {profile.avatar ? (
            <ProfileAvatar source={avatar} />
          ) : (
            <ProfileAvatar source={avatar} />
          )}
          <ProfileWelcome>
            <TextWelcome>Bem vindo de volta,</TextWelcome>
            <TextName>{profile.name}</TextName>
          </ProfileWelcome>
        </Profile>
        <Icon
          name="exit-to-app"
          size={24}
          color="#E74040"
          onPress={handleLogout}
        />
      </Header>
      <HeaderList>
        <TextName>Entregas</TextName>
        <TextOptions>
          <TextLink
            style={{
              marginRight: 15,
              color: '#7d40e7',
              textDecorationLine: 'underline',
            }}
          >
            Pendentes
          </TextLink>
          <TextLink>Entregues</TextLink>
        </TextOptions>
      </HeaderList>

      <List
        data={deliveries}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Deliveries data={item} />}
      />
    </Container>
  );
}
