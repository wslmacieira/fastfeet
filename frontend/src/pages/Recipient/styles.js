import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 36px 120px;

  table {
    width: 100%;
    padding: 24px 0p;
    border-spacing: 0 21px;
  }

  th {
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    color: #444;
    margin-bottom: -7px;
    :first-child {
      padding-left: 25px;
    }
  }
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
  }
`;
export const ActionContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
