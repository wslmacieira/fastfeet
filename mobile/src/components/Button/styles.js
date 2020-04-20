import { TouchableOpacity } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  height: 45px;
  width: 100%;
  background: #82bf18;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-family: 'Roboto-Regular';
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
