import styled from 'styled-components'

export const Container = styled.aside`
  border-top: 1px solid #222;
  box-shadow: 2px 4px 4px #333;
  background: #333;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  max-width: 80%;

  ul{
    width:100%;
    display: flex;
    flex-direction: column;
  }

  a{
    padding: 15px 0;
    color: #FDFDFD;
    display: grid;
    place-items: center;
    border-bottom: .5px solid #222;
    transition: .1s ease-out;
  }
  a:hover{
    background-color: #555;
  }

  li{
    width: 90%;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 4px;
  }

  li span:first-of-type{
    font-size: 1.5rem;
    margin-top: 5px;
    margin-left: 10px;
  }
`