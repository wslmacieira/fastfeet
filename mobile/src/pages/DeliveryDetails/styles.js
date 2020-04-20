import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  flex: 1;
`;

export const HeaderCard = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;
export const TitleCard = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #7d40e7;
  margin-left: 10px;
`;
export const LabelText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #999;
  margin-bottom: 5px;
`;
export const SpanText = styled.Text`
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
`;
export const InfoCard = styled.View`
  background: #fff;
  margin: 0 20px;
  margin-bottom: 10px;
  padding: 15px 30px 0 15px;
  border-radius: 4px;
  border: 1px solid #eee;
  margin-top: -60px;
`;
export const SituacaoCard = styled.View`
  background: #fff;
  margin: 0 20px;
  margin-bottom: 10px;
  padding: 15px 30px 0 15px;
  border-radius: 4px;
  border: 1px solid #eee;
`;
export const Select = styled.View`
  margin: 0 20px;
  background: #f8f9fd;
  border-radius: 4px;
  border: 1px solid #eee;
  height: 83px;
  flex-direction: row;
`;
export const SelectOption = styled.TouchableOpacity`
  flex: 1;

  justify-content: center;
  align-items: center;
  border: 1px solid #eee;
`;
export const OptionText = styled.Text`
  font-size: 12px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;
