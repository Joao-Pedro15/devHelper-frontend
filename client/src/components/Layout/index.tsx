import React, { ReactNode } from 'react'
import { Header } from '../Header'
import { Sidebar } from '../Sidebar'
import * as S from './style'

type IProps = {
  children: ReactNode
  isToggle: boolean
}

export function Layout({ children, isToggle } : IProps) {
  return (
    <S.Container isToggle={isToggle}>
      <Header />
      <Sidebar />
      { children }
    </S.Container>
  )
}

