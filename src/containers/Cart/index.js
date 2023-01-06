import React from 'react'

import CartLogo from '../../assets/cart-image.svg'
import { CartItems, CartResume, Header } from '../../components'
import { CartImage, Container, Wrapper } from './styles'

export function Cart() {
  return (
    <Container>
      <Header />
      <CartImage src={CartLogo} alt="home logo" />
      <Wrapper>
        <CartItems />
        <CartResume />
      </Wrapper>
    </Container>
  )
}
