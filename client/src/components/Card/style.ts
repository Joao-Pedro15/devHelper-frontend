import styled from 'styled-components'

export const Container = styled.div`
  width: 25rem;
  height: 13rem;
  margin-bottom: 10px;
  border-radius: 12px;
  overflow: hidden;
  background-color:#eeee;
  box-shadow: 1px 2px 10px #ccc;
  transition: .5s ease-in-out;
  :hover{
    header{
      transform: scale(40);
      opacity: 50%;
    }
  }

  @media(max-width: 950px){
    width: 20rem;
    height: 10rem;
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