import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  background: #fff;
  flex: 1;
`;

export const Camera = styled.View`
  height: 90%;
  border-radius: 4px;
  margin-bottom: 22px;
  background: #eee;
`;

export const Content = styled.View`
  margin: -60px 20px 0 20px;
  flex: 1;
`;

export const Thumbnail = styled.Image`
  flex: 1;
`;

export const CameraButton = styled.TouchableOpacity`
 background: rgba(0, 0, 0, 0.3);
  align-self: center;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 20px;
`;
export const SubmitButton = styled(Button)`
  background: #7d40e7;
`;
