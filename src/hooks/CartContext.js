import PropTypes from 'prop-types'
import React, { useContext, createContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])

  const putProductInCart = async product => {
    const cartIndex = cartProducts.findIndex(prd => prd.id === product.id)
    let newCartProducts = []
    if (cartIndex >= 0) {
      newCartProducts = cartProducts
      newCartProducts[cartIndex].quantity =
        newCartProducts[cartIndex].quantity + 1
      setCartProducts(newCartProducts)
    } else {
      product.quantity = 1
      newCartProducts = [...cartProducts, product]
      setCartProducts(newCartProducts)
    }
    await updateLocalStorage(newCartProducts)
    toast.success(`${product.name} Adicionado Com  Sucesso`)
  }

  const deleteProduct = async productId => {
    const newCart = cartProducts.filter(product => product.id !== productId)

    setCartProducts(newCart)
    await updateLocalStorage(newCart)

    toast.success('Pedido Deletado Com  Sucesso')
  }

  const increaseProduct = async productId => {
    const newCart = cartProducts.map(product => {
      return product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    })
    setCartProducts(newCart)

    await updateLocalStorage(newCart)
  }
  const decreaseProduct = async productId => {
    const cartIndex = cartProducts.findIndex(pd => pd.id === productId)
    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map(product => {
        return product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      })
      setCartProducts(newCart)
    } else {
      deleteProduct(productId)
    }
  }

  const updateLocalStorage = async products => {
    await localStorage.setItem('devburguer:cartInfo', JSON.stringify(products))
  }
  // useEffect para recuperar dados do localStorage e gravar no userData novamente
  useEffect(() => {
    const loadUserData = async () => {
      const clientCartData = localStorage.getItem('devburguer:cartInfo')
      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData))
      }
    }

    loadUserData()
  }, [])

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        putProductInCart,
        increaseProduct,
        decreaseProduct
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('use User must be used with useContext')
  }

  return context
}

CartProvider.propTypes = {
  children: PropTypes.node
}
