import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
 padding: 85px 35px;
`;

export const ProfileAvatar = styled.Image`
  width: 136px;
  height: 136px;
  border-radius: 68px;
  margin-bottom: 42px;
  align-self: center;
`;

export const InfoTitle = styled.Text`
font-size: 12px;
color: #666;
`;
export const InfoText = styled.Text`
font-size: 22px;
font-weight: bold;
color: #444;
margin-bottom: 17px;
`;

export const LogoutButton = styled(Button)`
margin-top: 30px;
background: #E74040;
`;

