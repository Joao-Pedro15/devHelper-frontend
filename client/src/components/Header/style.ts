import styled from 'styled-components'

export const Container = styled.header`
  position: fixed;
  width: 100%;
  background-color: var(--primary);  
  z-index: 100;
  color: #fff;
  svg {
    color: #fff;
    border-color: #fff;
  }
  div:first-of-type {
    color: #fff;
    padding: .2rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  button {
    background-color: transparent;
    svg { font-size: 1.5rem };
    margin-left: -15px;
    border: none;
  }
`