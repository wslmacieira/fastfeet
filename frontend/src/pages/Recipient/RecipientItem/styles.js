import styled from 'styled-components';

export const Container = styled.tr`

    img {
      width: 35px;
      border-radius: 50%;
    }

    button {
      border: 0;
      background-color: transparent;
    }

    div.actions {
      width: 150px;
      height: 120px;
      background: #fff;
      position: absolute;
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
    }
    div.actions button {
      background-color: transparent;
      border: none;
    }
  }

  div.paginate {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      background: transparent;
      border: 0;
    }

    span {
      margin: 0 15px;
      color: #666;
      font-size: 16px;
      padding-bottom: 4px;
    }
  }
`;
