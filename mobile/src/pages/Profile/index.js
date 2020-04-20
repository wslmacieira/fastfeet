import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { parseISO, format } from 'date-fns';
import { TouchableOpacity, Text } from 'react-native';

import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  ProfileAvatar,
  InfoTitle,
  InfoText,
  LogoutButton,
} from './styles';

import avatar from '~/assets/no-avatar.png';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <ProfileAvatar source={avatar} />
      <InfoTitle>Nome completo</InfoTitle>
      <InfoText>{profile.name}</InfoText>
      <InfoTitle>Email</InfoTitle>
      <InfoText>{profile.email}</InfoText>
      <InfoTitle>data</InfoTitle>
      <InfoText>{format(parseISO(profile.created_at), 'dd/MM/yyy')}</InfoText>

      <LogoutButton loading={false} onPress={handleLogout}>
        Logout
      </LogoutButton>
    </Container>
  );
}
