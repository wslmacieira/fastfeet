import styled from 'styled-components';

export const Container = styled.div`
  padding: 29px 220px;

  button {
    :first-child {
      margin-right: 16px;
    }
  }

  form {
    width: 900px;
    height: 220px;
    background: #fff;
    border-radius: 4px;
    padding: 28px 30px;
  }

  div.inputGroup {
    display: flex;
    justify-content: space-between;

    label {
      width: 48%;
    }
  }

  input {
    margin: 10px 0;
    height: 45px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 10px;
  }
  select {
    margin: 10px 0;
    height: 45px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  label {
    display: flex;
    flex-direction: column;
  }
`;
export const ContentList = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ActionContent = styled.div`
  display: flex;
`;
