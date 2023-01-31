import React from 'react'
import { useLocation } from 'react-router-dom'

import { SideMenuAdmin } from '../../components'
import paths from '../../constants/paths'
import ListProducts from './ListProducts'
import NewProduct from './NewProduct'
import Orders from './Orders/index'
import { Container, ContainerItems } from './styles'

export function Admin() {
  const { pathname } = useLocation()

  return (
    <Container>
      <SideMenuAdmin />
      <ContainerItems>
        {pathname === paths.Order && <Orders />}
        {pathname === paths.ListProducts && <ListProducts />}
        {pathname === paths.NewProduct && <NewProduct />}
      </ContainerItems>
    </Container>
  )
}
