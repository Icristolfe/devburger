import React from 'react'

import CartLogo from '../../assets/cart-image.svg'
import { CartItems } from '../../components'
import { CartImage, Container, Wrapper } from './styles'

export function Cart() {
  return (
    <Container>
      <CartImage src={CartLogo} alt="home logo" />
      <Wrapper>
        <CartItems />
      </Wrapper>
    </Container>
  )
}
