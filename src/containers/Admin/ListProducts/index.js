import CancelIcon from '@mui/icons-material/Cancel'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'

import api from '../../../services/api'
import formatCurrency from '../../../Utils/formatCurrency'
import { Container, Img, EditedIcon } from './styles'

function ListProducts() {
  const [products, setProducts] = useState()

  useEffect(() => {
    async function LoadOrders() {
      const { data } = await api.get('products')

      setProducts(data)
      console.log(data)
    }

    LoadOrders()
  }, [])

  function isOffer(offerStatus) {
    if (offerStatus) {
      return <CheckBoxIcon style={{ color: '#228B22' }} />
    }
    return <CancelIcon style={{ color: '#CC1717' }} />
  }
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 750 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell align="center">Produto em Oferta</TableCell>
              <TableCell align="center">Imagem do Produto</TableCell>
              <TableCell>Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products &&
              products.map(product => (
                <TableRow
                  key={product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell>{formatCurrency(product.price)}</TableCell>
                  <TableCell align="center">{isOffer(product.offer)}</TableCell>
                  <TableCell align="center">
                    <Img src={product.url} alt="imagem-produto" />
                  </TableCell>
                  <TableCell>
                    <EditedIcon />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default ListProducts
