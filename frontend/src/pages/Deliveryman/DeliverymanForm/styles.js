import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 29px 220px;

  button {
    :first-child {
      margin-right: 16px;
    }
  }

  form {
    width: 900px;
    height: 401px;
    background: #fff;
    border-radius: 4px;
    padding: 28px 30px;
  }

  input {
    margin: 10px 0;
    height: 45px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 10px;
  }

  label {
    display: flex;
    flex-direction: column;
  }

  label.avatar-input {

  }
`;

export const ContentList = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ActionContent = styled.div`
  display: flex;
`;
