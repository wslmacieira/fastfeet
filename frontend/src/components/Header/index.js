import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '~/assets/logo.svg';

import { Container, Content, Navigation, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <Navigation>
            <NavLink to="/deliveries">ENCOMENDAS</NavLink>
            <NavLink to="/deliverymen">ENTREGADORES</NavLink>
            <NavLink to="/recipients">DESTINATÁRIOS</NavLink>
            <NavLink to="/problems">PROBLEMAS</NavLink>
          </Navigation>
        </nav>

        <aside>
          <Profile>
            <strong>Admin FastFeet</strong>
            <button type="button">sair do sistema</button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
