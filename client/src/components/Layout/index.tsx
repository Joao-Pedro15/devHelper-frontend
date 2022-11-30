import React, { ReactNode, useState } from 'react'
import { Header } from '../Header'
import { Sidebar } from '../Sidebar'
import * as S from './style'

type IProps = {
  children: ReactNode
}

export function Layout({ children } : IProps) {
  const [toggle, setToggle] = useState<boolean>(false)
  return (
    <S.Container isToggle={toggle}>
      <Header setToggle={setToggle} toggle={toggle} />
      <Sidebar isToggle={toggle} />
      <div className='page'>
      { children }
      </div>
    </S.Container>
  )
}

