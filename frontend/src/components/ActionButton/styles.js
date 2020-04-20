import styled from 'styled-components';

export default styled.button`
  padding: 0 16px;
  height: 36px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  display: flex;
  background: ${props => props.background || '#ccc '};
  text-align: center;
  align-items: center;
  svg {
    margin-right: 7px;
  }
`;
