import styled from 'styled-components'

import Background from '../../assets/background.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  background-image: url(${Background});

  div {
    position: relative;
  }
`

export const BurgerImage = styled.img`
  height: 100%;
`

export const ContainerItens = styled.div`
  background: #373737;
  border-radius: 0 10px 10px 0;
  height: 100%;
  padding: 0 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #ffffff;

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    margin-top: 100px;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  form::p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #cc1717;
  }

  img {
    margin: 104px 70px 0 70px;
    text-align: center;
  }
`

export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  margin: 16px 0 5px 0;
`

export const Input = styled.input`
  width: 390px;
  height: 38px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: none;
  padding-left: 10px;
  border: ${props => (props.error ? '2px solid #cc1717;' : 'none')};
`

export const SignUpLink = styled.p`
  margin-bottom: 23px;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;

  a {
    text-decoration-line: underline;
    color: #ffffff;
    cursor: pointer;
  }
`
