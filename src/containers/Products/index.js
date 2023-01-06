import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import ProductsLogo from '../../assets/products-logo.svg'
import { Header } from '../../components'
import { CardProduct } from '../../components/CardProducts'
import api from '../../services/api'
import {
  ProductsImage,
  Container,
  CategoriesMenu,
  CategoryButton,
  ProductsContainer
} from './styles'

export function Products() {
  const { state } = useLocation()
  let categoryId = 0
  if (state?.categoryId) {
    categoryId = state.categoryId
  }
  const [activeCategory, setActiveCategory] = useState(categoryId)
  const [category, setCategory] = useState([])
  const [products, setProducts] = useState([])

  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    async function LoadCategories() {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'Todas' }, ...data]
      setCategory(newCategories)
    }

    async function LoadProducts() {
      const { data } = await api.get('products')
      setProducts(data)
    }
    LoadProducts()
    LoadCategories()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products)
    } else {
      const newFilteredProducts = products.filter(
        product => product.category_id === activeCategory
      )
      setFilteredProducts(newFilteredProducts)
    }
  }, [activeCategory, products])

  return (
    <Container>
      <Header />
      <ProductsImage src={ProductsLogo} alt="logo de produtos" />
      <CategoriesMenu>
        {category &&
          category.map(category => (
            <CategoryButton
              onClick={() => setActiveCategory(category.id)}
              key={category.id}
              isActiveCategory={activeCategory === category.id}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoriesMenu>

      <ProductsContainer>
        {filteredProducts &&
          filteredProducts.map(product => (
            <CardProduct key={product.id} product={product} />
          ))}
      </ProductsContainer>
    </Container>
  )
}
