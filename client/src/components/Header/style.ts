import styled from 'styled-components'

export const Container = styled.header`
  position: fixed;
  width: 97%;
  background-color: blueviolet;  
  z-index: 100;
  color: #fff;
  padding: 5px 10px;
  border-radius: 10px;
  margin: 5px 10px;
  svg {
    color: #fff;
    border-color: #fff;
    font-size: 20rem;
  }
  div:first-of-type {
    color: #fff;
    padding: .1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  button {
    background-color: transparent;
    svg { font-size: 2rem; font-weight: bold };
    margin-left: 4px;
    border: none;
  }
`