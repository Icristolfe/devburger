import React from 'react'

import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../Utils/formatCurrency'
import { Container, Header, Body, EmptyCart } from './styles'

export function CartItems() {
  const { cartProducts, increaseProduct, decreaseProduct } = useCart()
  return (
    <Container>
      <Header>
        <p></p>
        <p>Itens</p>
        <p>Preço</p>
        <p style={{ paddingRight: 30 }}>Quantidade</p>
        <p>Total</p>
      </Header>
      {cartProducts && cartProducts.length > 0 ? (
        cartProducts.map(product => (
          <Body key={product.id}>
            <img src={product.url} />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <div className="quantity-container">
              <button onClick={() => increaseProduct(product.id)}>+</button>
              <p>{product.quantity}</p>
              <button onClick={() => decreaseProduct(product.id)}>–</button>
            </div>
            <p>{formatCurrency(product.quantity * product.price)}</p>
          </Body>
        ))
      ) : (
        <EmptyCart>Carrinho Vazio</EmptyCart>
      )}
    </Container>
  )
}
