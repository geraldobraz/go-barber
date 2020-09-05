import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  border: 2px solid #232129;
  border-radius: 10px;
  color: #666360;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    background: transparent;
    border: 0;
    color: #f4ede8;
    flex: 1;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
