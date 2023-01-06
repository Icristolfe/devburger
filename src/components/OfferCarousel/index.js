import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { useNavigate } from 'react-router-dom'

import Offer from '../../assets/offers.svg'
import { useCart } from '../../hooks/CartContext'
import api from '../../services/api.js'
import formatCurrency from '../../Utils/formatCurrency'
import {
  OfferImage,
  Container,
  ContainerItems,
  Image,
  Button,
  P
} from './styles'

export function OfferCarousel() {
  const [offer, setOffer] = useState([])
  useEffect(() => {
    async function LoadCategories() {
      const { data } = await api.get('products')

      const onlyOffers = data
        .filter(product => product.offer)
        .map(product => {
          return { ...product, formatedPrice: formatCurrency(product.price) }
        })

      setOffer(onlyOffers)
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
  const { putProductInCart } = useCart()
  const navigate = useNavigate()
  return (
    <Container>
      <OfferImage src={Offer} alt="home logo" />

      <Carousel itemsToShow={5} breakPoints={breakPoints}>
        {offer &&
          offer.map(product => (
            <ContainerItems key={product.id}>
              <Image src={product.url} alt="imagem categoria" />
              <P>{product.name}</P>
              <P price={true}>{product.formatedPrice}</P>
              <Button
                onClick={() => {
                  putProductInCart(product)
                  navigate('/carrinho')
                }}
                style={{
                  fontWeight: 700,
                  fontSize: 18
                }}
              >
                {' '}
                Peça Agora
              </Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  )
}
