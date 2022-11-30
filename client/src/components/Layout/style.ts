import styled from 'styled-components'

type IProps = {
  isToggle: boolean
}

export const Container = styled.div<IProps>`
  display: flex;
  overflow-x: hidden;
  .page {
    position: relative;
    width: 100%;
    height: 90vh;
    left: 10%;
    top: 3rem;
    padding: 0 10px;
    display: flex;
}
`