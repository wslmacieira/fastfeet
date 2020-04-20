import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const ContainerBlack = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
`;

export const ModalContent = styled.div`
  content: '';
  width: 450px;
  height: 353px;
  background: #fff;
  position: fixed;
  top: 140px;
  left: 370px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 27px 25px;

  strong {
    margin-bottom: 6px;
    font-size: 14px;
    color: #444;
  }

  span {
    margin-bottom: 10px;
    color: #666;
    font-size: 16px;
  }

  div.signature {
    display: flex;
    flex-direction: column;
  }

  div strong {
    margin-bottom: 23px;
  }

  div img {
    width: 234px;
    height: 36px;
    align-self: center;
  }
`;
