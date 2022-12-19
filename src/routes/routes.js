import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home, Login, Products, Register } from '../containers'
import PrivateRoute from './private-route'

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          path="/produtos"
          element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
