import styled from 'styled-components'

type IProps = {
  isToggle: boolean
}

export const Container = styled.div<IProps>`
  display: flex;
  overflow-x: hidden;
  height: 100vh;
  .page {
    position: relative;
    width: 100%;
    height: 90vh;
    top: 4rem;
    left: 4rem;
    padding: 0 10px;
    display: flex;
}
`