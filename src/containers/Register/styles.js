import styled from 'styled-components'

import Background from '../../assets/background.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${Background});
  div {
    position: relative;
  }
`

export const RegisterImage = styled.img`
  height: 100%;
`

export const ContainerItens = styled.div`
  background: #373737;
  border-radius: 0 10px 10px 0;
  height: 100%;
  padding: 0px 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
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
    margin: 45px 75px 20px 75px;
    text-align: center;
  }
`

export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  margin-top: ${props => (props.error ? '12px' : '25px')};
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 391px;
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

export const ErrorMessage = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #cc1717;
  margin-top: 5px;
`
