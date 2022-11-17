import { ReactNode } from 'react'
import * as S from './style'

type IProps = {
  children: ReactNode
}

export function CardContainer({ children } : IProps) {
  return (
    <S.Container>
      { children }
    </S.Container>
  )
}