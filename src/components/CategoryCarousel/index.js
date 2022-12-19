import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Category from '../../assets/category.svg'
import api from '../../services/api.js'
import {
  CategoryImage,
  Container,
  ContainerItems,
  Image,
  Button
} from './styles'

export function CategoryCarousel() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    async function LoadCategories() {
      const { data } = await api.get('categories')
      setCategories(data)
    }
    LoadCategories()
  }, [])
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]

  return (
    <Container>
      <CategoryImage src={Category} alt="home logo" />

      <Carousel itemsToShow={5} breakPoints={breakPoints}>
        {categories &&
          categories.map(category => (
            <ContainerItems key={category.id}>
              <Image src={category.url} alt="imagem categoria" />
              <Button> {category.name}</Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  )
}
