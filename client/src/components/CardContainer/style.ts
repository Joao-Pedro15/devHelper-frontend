import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 10fr));
  gap: 20px;
  position: relative;
  width: 90%;
  place-items: center;

  @media(max-width: 950px){
    grid-template-columns: repeat(auto-fit, minmax(20rem, 10fr));

  }

`