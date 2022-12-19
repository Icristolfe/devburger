import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  background: #ffffff;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  gap: 15px;
  padding: 14px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const Image = styled.img`
  width: 150px;
  border-radius: 6px;
`

export const ProductName = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 19px;
  margin-bottom: 55px;
`

export const ProductPrice = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 21px;
  color: #000000;
  margin-bottom: 18px;
`
