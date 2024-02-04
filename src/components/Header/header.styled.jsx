import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.header`
position: relative;
  left: 0;
  top: 0;
  right: 0;
  padding: 12px 0;
 min-width: 1440px;
 
`;
export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  gap: 60px;
  padding-left: 10px;
  justify-content: center;
  background: linear-gradient(to right, #3498db, #e74c3c);
`;
export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;
export const NavLinkStyled = styled(NavLink)`
  font-size: 16px;
  line-height: calc(24 / 16);
  padding: 10px 27px;
  color: var(--color-text-primary);
  background-color: transparent;
  border-radius: 12px;
  border: var(--border-20);
  transition: background-color var(--transition);
  text-decoration: none;

  &:hover,
  &:focus {
    background-color: var(--bg-btn);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    transition: background-color 0.25s ease;
    transform: scale(1.05);
  }
  &.active {
    background-color: var(--bg-btn);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
export const WrapperNavLinkStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;
