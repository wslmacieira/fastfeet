import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-bottom: 1px solid #ddd;
`;
export const Content = styled.div`
  height: 64px;
  padding: 19px 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
  }

  img {
    width: 135px;
    height: 26px;
    margin-right: 30px;
    padding-right: 30px;
    border-right: 1px solid #ddd;
  }

  a {
    font-weight: bold;
    color: #444;
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Navigation = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  a {
    margin-right: 20px;
    font-size: 15px;
    font-weight: bold;
    color: #999;
    transition: color 0.2s;
    &:hover {
      color: #444;
    }
    &.active {
      color: #444;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  strong {
    font-weight: bold;
    color: #666;
    margin-bottom: 7px;
  }

  button {
    margin-bottom: 15px;
    border: 0;
    background: none;
    color: red;
    transition: color 0.2s;
    &:hover {
      color: red;
    }
  }
`;
