import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;
  background: #7D40E7;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.View`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-top: 37.5px;
`;

export const SubmitButton = styled(Button)``;
