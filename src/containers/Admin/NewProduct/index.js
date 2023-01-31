import React, { useEffect, useState } from 'react'

import api from '../../../services/api'
import { Container } from './styles'

function NewProduct() {
  const [products, setProducts] = useState()

  useEffect(() => {
    async function LoadOrders() {
      const { data } = await api.get('products')

      setProducts(data)
    }

    LoadOrders()
  }, [])

  return (
    <Container>
      <div>Ok</div>
    </Container>
  )
}

export default NewProduct
