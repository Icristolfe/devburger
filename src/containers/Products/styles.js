import styled from 'styled-components'

export const Container = styled.div`
  min-height: calc(100vh -72px);
  background-color: #e5e5e5;
`

export const ProductsImage = styled.img`
  width: 100%;
`
export const CategoriesMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin: 20px 0 60px 0;
`

export const CategoryButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${props => (props.isActiveCategory ? '#9758A6' : '#9A9A9D')};
  border-bottom: ${props =>
    props.isActiveCategory ? '2px solid #9758a6' : 'none'};
  height: 40px;
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  padding: 40px;
`
