import React from 'react'

import HomeLogo from '../../assets/home-logo.svg'
import { CategoryCarousel, OfferCarousel } from '../../components'
import { HomeImage, Container } from './styles'

export function Home() {
  return (
    <Container>
      <HomeImage src={HomeLogo} alt="home logo" />
      <CategoryCarousel />
      <OfferCarousel />
    </Container>
  )
}
