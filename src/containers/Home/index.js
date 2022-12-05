import React from 'react'

import HomeLogo from '../../assets/home-logo.svg'
import CategoryCarousel from '../../components/CategoryCarousel'
import OffersCarousel from '../../components/OfferCarousel'
import { HomeImage, Container } from './styles'

function Home() {
  return (
    <Container>
      <HomeImage src={HomeLogo} alt="home logo" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  )
}

export default Home
