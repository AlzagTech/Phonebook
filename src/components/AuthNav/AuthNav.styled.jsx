import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;

  li + li {
    margin-left: 12px;
  }
`;
