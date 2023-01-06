import styled from 'styled-components'

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 16px;
  color: #222222;
  padding: 30px 40px 0 24px;

  div {
    display: flex;
    flex-direction: column;
  }
  .container-top {
    display: grid;
    grid-template-areas:
      'title title'
      'items items-price'
      'delivery-tax delivery-tax-price';
    grid-gap: 10px 50px;
  }

  .title {
    grid-area: title;
    margin-bottom: 20px;
    font-weight: 500;
  }

  .items {
    grid-area: items;
    font-style: normal;
    font-weight: 300;
  }

  .items-price {
    grid-area: items-price;
    font-style: normal;
    font-weight: 300;
    text-align: center;
  }

  .delivery-tax {
    grid-area: delivery-tax;
    font-style: normal;
    font-weight: 300;
  }

  .delivery-tax-price {
    grid-area: delivery-tax-price;
    font-style: normal;
    font-weight: 300;
    text-align: center;
  }

  .container-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    padding: 0 28px 15px 24px;
    margin-top: 50px;
    gap: 10px;
  }
`
