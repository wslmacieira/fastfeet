import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRoute, useNavigation } from '@react-navigation/native';
import { RNCamera } from 'react-native-camera';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '~/components/Header';

import {
  Container,
  Content,
  Camera,
  CameraButton,
  SubmitButton,
} from './styles';

export default function DeliveryConfirm() {
  const auth = useSelector((state) => state.auth);
  const route = useRoute();
  const [camera, setCamera] = useState(null);
  const [file, setFile] = useState(null);

  async function handleTakePicture() {
    if (camera) {
      const options = {
        quality: 0.5,
        base64: false,
        width: 800,
      };
      const data = await camera.takePictureAsync(options);

      setFile(data);
    }
  }

  async function handleSubmit() {
    const { order_id } = params;

    try {
      const dataFile = new FormData();
      dataFile.append('file', {
        uri: file.uri,
        name: 'signature.jpg',
        type: 'image/jpeg',
      });

      const response = await api.post('/files', dataFile);

      const { id } = route.params;

      const finishResponse = await api.put(
        `/deliverymen/${userId}/deliveries/${order_id}/finish`,
        {
          signature_id: id,
        }
      );

      SnackBar.show({
        text: finishResponse.data.msg,
        backgroundColor: '#2CA42B',
      });
      navigate('Home');
    } catch (err) {
      SnackBar.show({
        text: 'Take a photo of the signature',
        backgroundColor: '#DE3B3B',
        duration: SnackBar.LENGTH_LONG,
      });
    }
  }
  return (
    <Container>
      <Header title="Confirmar entrega" />
      {/* <Content>
        <Camera
          ref={(ref) => {
            setCamera(ref);
          }}
          type={RNCamera.Constants.Type.back}
          captureAudio={false}
          androidCameraPermissionOptions={{
            title: 'Permissão para usar a câmera',
            message: 'Precisamos de permissão para usar sua câmera',
            buttonPositive: 'OK',
            buttonNegative: 'Cancelar',
          }}
        >
          <CameraButton onPress={handleTakePicture}>
            <Icon name="camera" size={24} color="#fff" />
          </CameraButton>
        </Camera>

        <SubmitButton>Enviar</SubmitButton>
      </Content> */}
    </Container>
  );
}
