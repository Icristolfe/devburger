import PropTypes from 'prop-types'
import React, { useContext, createContext, useState, useEffect } from 'react'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({})

  const putUserData = async userInfo => {
    setUserData(userInfo)
    // Salvando dados do userData no localStorage
    await localStorage.setItem('devburguer:userData', JSON.stringify(userInfo))
  }
  // useEffect para recuperar dados do localStorage e gravar no userData novamente
  useEffect(() => {
    const loadUserData = async () => {
      const clientInfo = localStorage.getItem('devburguer:userData')
      if (clientInfo) {
        setUserData(JSON.parse(clientInfo))
      }
    }

    loadUserData()
  }, [])

  return (
    <UserContext.Provider value={{ userData, putUserData }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('use User must be used with useContext')
  }

  return context
}

UserProvider.propTypes = {
  children: PropTypes.node
}
