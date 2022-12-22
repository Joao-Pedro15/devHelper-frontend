import styled from 'styled-components'

type IProps = {
  active?: boolean
}

export const Container = styled.div<IProps>`
  width: 20rem;
  height: 10rem;
  margin-bottom: 10px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 2px 2px 4px 2px #eee;
  padding: 5px 10px;
  position: relative;
  cursor: pointer;
  @media(max-width: 950px){
    width: 20rem;
    height: 10rem;
  }
  small {
    background-color: ${({active}) => active ? 'blueviolet' : 'orange'};
    border-radius: 5px;
    padding: 2px 5px;
    font-size: .7rem;
    right: 5%;
    bottom: 5%;
    position: absolute;
    font-weight: bold;
    color: white;
  }
`

export const Header = styled.header`
  transition: .5s ease-in-out;
  div:first-of-type {
    width: 100%;
    padding: 10px;
    background-color: #333;
  }
  svg {
    font-size: 3rem;
    padding: 5px 0 0 20px;
  }

`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 4px;
  h4{
    color: #333;
    font-size: 2rem;
  }
  svg {
    font-size: 3rem;
    padding: 5px 0 0 20px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
  }

  p{
    color: #bbb;
    font-size: .9rem;
  }
  div:last-of-type {
    padding: 1px;
    background-color: #eee;
  }

`