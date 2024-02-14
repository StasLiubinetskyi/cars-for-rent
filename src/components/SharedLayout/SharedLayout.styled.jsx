import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  `;

export const Header = styled.header`

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 10px 0;
  margin-bottom: 5px;
   nav {
    display: flex;
    gap: 24px;
  }
`;

export const Link = styled(NavLink)`

  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 24px;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  &.active {
    color: white;
    background-color: #3470ff;
  }
  &:hover {
    color: white;
    background-color: #3470ff;
  }
`;