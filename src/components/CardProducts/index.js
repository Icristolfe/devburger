import PropTypes from 'prop-types'
import React from 'react'

import { Container, Image, ProductName, ProductPrice } from './styles'

export function CardProducts({ product }) {
  return (
    <Container>
      <Image src={product.url} />

      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.price}</ProductPrice>
      </div>
    </Container>
  )
}

export default CardProducts

CardProducts.propTypes = {
  product: PropTypes.object
}
