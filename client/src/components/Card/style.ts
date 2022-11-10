import styled from 'styled-components'

export const Container = styled.div`
  width: 25rem;
  height: 13rem;
  border-radius: 12px;
  overflow: hidden;
  background-color: #fefefe;
  box-shadow: 1px 2px 10px #ccc;
`

export const Header = styled.header`
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