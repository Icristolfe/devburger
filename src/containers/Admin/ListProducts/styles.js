import EditIcon from '@mui/icons-material/Edit'
import styled from 'styled-components'

export const Container = styled.div``

export const Img = styled.img`
  width: 70px;
  border-radius: 10px;
`

export const EditedIcon = styled(EditIcon)`
  cursor: pointer;
  color: #323d5d;

  &&:hover {
    opacity: 0.8;
  }

  &&:active {
    opacity: 0.5;
  }
`
