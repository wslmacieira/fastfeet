import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  text-align: center;
  background: #fff;
  border-radius: 4px;
  padding: 60px 30px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }

  label {
    margin-bottom: 10px;
    text-align: start;
    font-size: 14px;
    font-weight: bold;
    color: #444;
  }

  input {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    height: 45px;
    padding: 0 15px;
    margin-bottom: 15px;

    ::placeholder {
      color: #999;
      font-size: 16px;
    }
  }

  span {
    color: red;
    text-align: left;
    margin-bottom: 10px;
  }

  button {
    background: #7d40e7;
    height: 45px;
    border: 0;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    transition: background 0, 2s;

    &:hover {
      background: ${darken(0.06, '#7d40e7')};
    }
  }
`;
