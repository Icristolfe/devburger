import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import ReactSelect from 'react-select'

import api from '../../../services/api'
import { Container, Label, Input, ButtonStyle, LabelUpload } from './styles'

function NewProduct() {
  const [products, setProducts] = useState()
  const [fileName, setFileName] = useState(null)

  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)

  useEffect(() => {
    async function LoadOrders() {
      const { data } = await api.get('products')

      setProducts(data)
    }

    LoadOrders()
  }, [])

  return (
    <Container>
      <form noValidate>
        <Label>Nome</Label>
        <Input placeholder="Nome" type="text" {...register('name')} />

        <Label>Preço</Label>
        <Input placeholder="Preço" type="number" {...register('price')} />

        <LabelUpload>
          {fileName || (
            <>
              <CloudUploadIcon />
              Carregue a imagem do produto
            </>
          )}

          <input
            type="file"
            accept="image/png, image/jpg"
            {...register('file')}
            onChange={value => {
              setFileName(value.target.files[0]?.name)
            }}
          />
        </LabelUpload>

        <ReactSelect />

        <ButtonStyle>Adicionar produto</ButtonStyle>
      </form>
    </Container>
  )
}

export default NewProduct
