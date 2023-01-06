import React from 'react'

import HomeLogo from '../../assets/home-logo.svg'
import { CategoryCarousel, Header, OfferCarousel } from '../../components'
import { HomeImage, Container } from './styles'

export function Home() {
  return (
    <Container>
      <Header />
      <HomeImage src={HomeLogo} alt="home logo" />
      <CategoryCarousel />
      <OfferCarousel />
    </Container>
  )
}
