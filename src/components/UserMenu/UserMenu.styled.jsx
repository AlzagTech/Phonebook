import styled from 'styled-components';

export const UserMenuBox = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-right: 10px;
  }

  p span {
    font-weight: bold;

    text-transform: capitalize;
  }
`;

export const LogoutBtn = styled.button`
  padding: 4px;

  justify-content: center;
  align-items: center;

  font-size: 12px;
  font-weight: 500;

  border: none;
  border-radius: 4px;

  &:hover {
    background-color: #e6e3e3;
  }
`;
