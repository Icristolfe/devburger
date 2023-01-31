import PropTypes from 'prop-types'
import React from 'react'
import { Navigate } from 'react-router-dom'

function PrivateRoute({ element, children, isAdmin, ...rest }) {
  const user = localStorage.getItem('devburguer:userData')

  if (!user) {
    return <Navigate replace to="/login" />
  }
  if (isAdmin && !JSON.parse(user).admin) {
    return <Navigate replace to="/" />
  }
  return children
}

export default PrivateRoute

PrivateRoute.propTypes = {
  element: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.component]),
  isAdmin: PropTypes.oneOfType([PropTypes.bool, PropTypes.any])
}
