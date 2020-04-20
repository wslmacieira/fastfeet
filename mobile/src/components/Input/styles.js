import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 45px;
  background: #fff;
  border-radius: 4px;

`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  font-size: 16px;
  margin-left: 20px;
`;
