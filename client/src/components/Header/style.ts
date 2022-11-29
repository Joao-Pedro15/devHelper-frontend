import styled from 'styled-components'

export const Container = styled.header`
  position: fixed;
  width: 100%;
  margin-bottom: 100px;
  background-color: var(--primary);  
  div:first-of-type {
    padding: .3rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`