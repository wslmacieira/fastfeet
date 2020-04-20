import styled from 'styled-components';

export const Container = styled.tr`

  td.email {
    text-transform: lowercase;
  }

  td {
    text-transform: capitalize;
    font-size: 16px;
    text-align: left;
    padding: 22px 0 16px 0;
    background: #fff;
    color: #666;
    :first-child {
      padding-left: 25px;
      border-radius: 4px 0 0 4px;
    }
    :last-child {
      border-radius: 0 4px 4px 0;
    }

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
`;
