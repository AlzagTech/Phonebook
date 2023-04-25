import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;

  li + li {
    margin-left: 16px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  padding-top: 20px;
  padding-bottom: 20px;

  text-decoration: none;
  font-size: 18px;
  font-weight: 600;

  color: black;

  &:hover,
  &:focus {
    color: #ba8686;
  }

  &.active {
    color: #ba8686;
    position: relative;
  }

  &.active::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 12px;
    left: 0;

    width: 100%;
    height: 4px;
    border-radius: 2px;

    background-color: #ba8686;
  }
`;
