import LogoutIcon from '@mui/icons-material/Logout'
import React from 'react'
import { useLocation } from 'react-router-dom'

import { useUser } from '../../hooks/UserContext'
import listLinks from './menu-list'
import { Container, ItemContainer, ListLink } from './styles'

export function SideMenuAdmin() {
  const { logout } = useUser()
  const { pathname } = useLocation()
  return (
    <Container>
      <hr></hr>
      {listLinks.map(item => (
        <ItemContainer key={item.id} isActive={pathname === item.link}>
          <item.icon className="icon" />
          <ListLink to={item.link}>{item.label}</ListLink>
        </ItemContainer>
      ))}
      <hr></hr>

      <ItemContainer style={{ position: 'fixed', bottom: '30px' }}>
        <LogoutIcon className="icon" />
        <ListLink to="/login" onClick={logout}>
          Sair
        </ListLink>
      </ItemContainer>
    </Container>
  )
}
