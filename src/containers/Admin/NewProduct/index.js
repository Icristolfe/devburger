import { yupResolver } from '@hookform/resolvers/yup'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { ErrorMessage } from '../../../components'
import api from '../../../services/api'
import { Container, Label, Input, ButtonStyle, LabelUpload } from './styles'

function EditProduct() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])

  const navigate = useNavigate()

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do produto'),
    price: Yup.string().required('Digite o preço do produto'),
    category: Yup.object().required('Escolha uma categoria'),
    file: Yup.mixed()
      .test('required', 'Carregue um arquivo', value => {
        return value?.length > 0
      })
      .test('fileSize', 'Carregue arquivos até 2mb', value => {
        return value[0]?.size <= 200000
      })
      .test('type', 'Carregue arquivos JPEG ou PNG', value => {
        return value[0]?.type === 'image/jpeg' || value[0]?.type === 'image/png'
      })
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = async data => {
    const productDataFormData = new FormData()

    productDataFormData.append('name', data.name)
    productDataFormData.append('price', data.price)
    productDataFormData.append('category_id', data.category.id)
    productDataFormData.append('file', data.file[0])

    await toast.promise(api.post('products', productDataFormData), {
      pending: 'Criando produto...',
      success: 'Produto criado com sucesso',
      error: 'Falha ao criar o produto'
    })

    setTimeout(() => {
      navigate('/listar-produtos')
    }, 2000)
  }

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      setCategories(data)
    }

    loadCategories()
  }, [])

  return (
    <Container>
      <h1>Crie um novo produto</h1>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Input placeholder="Nome" type="text" {...register('name')} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>

        <div>
          <Label>Preço</Label>
          <Input placeholder="Preço" type="number" {...register('price')} />
          <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </div>

        <div>
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
          <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </div>

        <div>
          <Controller
            name="category"
            control={control}
            render={({ field }) => {
              return (
                <ReactSelect
                  {...field}
                  options={categories}
                  getOptionLabel={cat => cat.name}
                  getOptionValue={cat => cat.id}
                  placeholder="categorias"
                />
              )
            }}
          />
          <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </div>
        <ButtonStyle>Adicionar produto</ButtonStyle>
      </form>
    </Container>
  )
}

export default EditProduct
