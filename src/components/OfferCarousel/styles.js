import styled from 'styled-components'

export const Container = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding-top: 35px;

  .rec.rec-arrow {
    background: #9758a6;
    color: #efefef;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .rec.rec-arrow:hover {
    background-color: #efefef;
    color: #9758a6;
    border: 2px solid #9758a6;
  }

  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }

  .rec.rec-dot {
    outline: none;
    display: none;
  }
`

export const OfferImage = styled.img`
  border: none;
`

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 200px;
  height: 400px;
  margin-bottom: 40px;
`

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 16px;
`

export const Button = styled.button`
  width: 200px;
  height: 50px;
  background: #9758a6;
  box-shadow: 0px 5px 10px rgba(151, 88, 166, 0.22),
    0px 20px 40px rgba(151, 88, 166, 0.24);
  border-radius: 8px;
  border: none;
  cursor: pointer;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`

export const P = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 120%;
  color: ${props => (props.price ? '#212121' : '#424242')};
  margin-bottom: ${props => (props.price ? '16px' : '8px')};
`
