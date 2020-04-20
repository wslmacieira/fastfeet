import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  button {
    background-color: transparent;
    border: 0;
  }
`;

export const MenuList = styled.ul`
  position: absolute;
  /* height: 120px; */
  width: ${props => (props.problem ? '200px' : '150px')};
  z-index: 1;
  left: calc(50% - 110px);
  top: calc(100%);
  background: #fff;
  border-radius: 4px;
  padding: 15px 5px;
  display: ${props => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 7px);
    top: -10px;
    height: 0;
    width: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 10px solid #fff;
  }
  button {
    display: flex;
    text-align: left;
    font-size: 16;
    color: #999;
    padding-left: 10px;
    padding-bottom: 15px;
    :last-child{
      padding-bottom: 0;
    }
    span {
      margin-left:7px;
    }
  }
`;
