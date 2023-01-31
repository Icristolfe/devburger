import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'

import api from '../../../services/api'
import formatDate from '../../../Utils/formatDate'
import status from './order-status'
import Row from './row'
import { Container, LinkMenu, Menu } from './styles'

function Orders() {
  const [orders, setOrders] = useState([])
  const [filteredOrders, setfilteredOrders] = useState([])
  const [activeStatus, setActiveStatus] = useState(1)
  const [rows, setRows] = useState([])

  useEffect(() => {
    async function LoadOrders() {
      const { data } = await api.get('orders')

      setOrders(data)
      setfilteredOrders(data)
    }

    LoadOrders()
  }, [])

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: formatDate(order.createdAt),
      status: order.status,
      products: order.products
    }
  }

  useEffect(() => {
    const newRows = filteredOrders.map(ord => createData(ord))
    setRows(newRows)
  }, [filteredOrders])

  useEffect(() => {
    if (activeStatus === 1) {
      setfilteredOrders(orders)
    } else {
      const statusIndex = status.findIndex(sts => sts.id === activeStatus)

      const newFilteredOrders = filteredOrders.filter(
        order => order.status === status[statusIndex].value
      )
      setfilteredOrders(newFilteredOrders)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orders])

  function handleStatus(status) {
    if (status === 1) {
      setfilteredOrders(orders)
    } else {
      const newOrder = orders.filter(order => order.status === status.value)
      setfilteredOrders(newOrder)
      setActiveStatus(status.id)
    }
  }
  return (
    <Container>
      <Menu>
        {status &&
          status.map(status => (
            <LinkMenu
              key={status.id}
              onClick={() => handleStatus(status)}
              isActiveStatus={activeStatus === status.id}
            >
              {status.label}
            </LinkMenu>
          ))}
      </Menu>

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do pedido</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <Row
                key={row.orderId}
                row={row}
                setOrders={setOrders}
                orders={orders}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Orders
