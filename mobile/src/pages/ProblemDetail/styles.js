import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  flex: 1;
`;
export const Background = styled.View`
  background: #7d40e7;
  height: 155px;
`;

export const Title = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  color: #fff;
  margin-top: -60px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingTop: 20 },
})``;
