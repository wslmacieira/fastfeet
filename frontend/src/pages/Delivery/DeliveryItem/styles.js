import styled from 'styled-components';

export const Container = styled.tr`
  td.avatar-image {
    display: flex;
    align-items: center;
    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }

  td.status span {
    max-width: 120px;
    padding: 5px 10px 3px 0;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: initial;
    font-weight: bold;
    font-size: 14px;
    ${props => {
      switch (props.status) {
        case 'ENTREGUE':
          return 'background: #DFF0DF; color: #2CA42B';
        case 'RETIRADA':
          return 'background: #BAD2FF; color: #4D85EE';
        case 'CANCELADA':
          return 'background: #FAB0B0; color: #DE3B3B';
        default:
          return 'background: #F0F0DF; color: #C1BC35';
      }
    }};
    svg {
      position: relative;
      margin: 0 6px;
    }
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
  }
`;
