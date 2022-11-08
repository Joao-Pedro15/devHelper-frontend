import React from 'react'
import * as S from './style'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


export function Header() {
  const toggle = true
  return (
    <S.Container>
      <div>
        <button>{toggle ? <AiOutlineMenu/> : <AiOutlineClose />}</button>
      </div>
      <div>Quem ta logado</div>
    </S.Container>
  )
}