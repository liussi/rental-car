// Header.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, NavContainer, NavLinkStyled, NavStyled, NavWrapper, WrapperNavLinkStyled } from './header.styled';

export const Header = () => {
  return (
    <NavContainer>
      <Container>
        <NavStyled>
          <NavWrapper>
            <WrapperNavLinkStyled>
              <NavLinkStyled aria-label="Home" to="/">
                Home
              </NavLinkStyled>
            </WrapperNavLinkStyled>
            <WrapperNavLinkStyled>
              <NavLinkStyled aria-label="Catalog" to="/catalog">
                Catalog
              </NavLinkStyled>
            </WrapperNavLinkStyled>
            <WrapperNavLinkStyled>
              <NavLinkStyled aria-label="Favorites" to="/favorites">
                Favorites
              </NavLinkStyled>
            </WrapperNavLinkStyled>
          </NavWrapper>
        </NavStyled>
      </Container>
        <Outlet />
    </NavContainer>
  );
};
