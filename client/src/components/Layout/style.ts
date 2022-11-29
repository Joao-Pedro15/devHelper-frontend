import styled from 'styled-components'

type IProps = {
  isToggle: boolean
}

export const Container = styled.div<IProps>`
  display: block;
  overflow-x: hidden;
`