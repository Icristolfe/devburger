import styled from 'styled-components'

export const Container = styled.div`
  background: #fff;
  width: 100%;
  height: 72px;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
`

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const ContainerText = styled.div`
  p {
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #555555;
  }
`

export const Line = styled.div`
  height: 40px;
  border: 0.5px solid #bababa;
`

export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
  line-height: 19px;
  color: ${props => (props.isActive ? '#9758A6' : '#555555')};
  font-weight: ${props => (props.isActive ? 700 : 400)};

  &&:hover {
    opacity: 0.7;
  }
`

export const PageLinkExit = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #9758a6;

  &&:hover {
    opacity: 0.7;
  }
`
