import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Content = styled.View`
  margin-top: -60px;
  padding: 0 20px;
`;

export const TextArea = styled(Input).attrs({
  textAlignVertical: 'top',
  padding: 0,
})`
  min-height: 250px;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  flex: 1;
  text-align: center;
  box-shadow: 0 0 3px #0000001a;
  border: 0;
  margin: 0 5px;
`;

export const SubmitButton = styled(Button)`
  background: #7d40e7;
  margin-top: 20px;
`;
