import styled from 'styled-components'

type IProps = {
  isToggle: boolean
}

const toggle = `
"a1 a1 a1 a1 a1 a1"
"a2 a3 a3 a3 a3 a3"
"a2 a3 a3 a3 a3 a3"
`
const notToggle = `
"a1 a1 a1"
"a3 a3 a3"
"a3 a3 a3"
`

export const Container = styled.div<IProps>`
  display: grid;
  grid-template-areas: ${({isToggle}) => isToggle === true ? toggle : notToggle};


  header {
    grid-area: a1;
  }

  aside {
    grid-area: a2;
  }

  main {
    grid-area: a3;
  }
`