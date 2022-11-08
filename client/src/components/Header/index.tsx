import React, { Dispatch, SetStateAction, useState } from 'react'
import * as S from './style'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

type IProps = {
  toggle: boolean,
  setToggle: Dispatch<SetStateAction<boolean>>
}

export function Header({ setToggle, toggle } : IProps) {
  return (
    <S.Container>
      <div>
        <button
        onClick={() => setToggle(!toggle)}
        >
          {!toggle ? <AiOutlineMenu/> : <AiOutlineClose />}
        </button>
      </div>
      <div>Quem ta logado</div>
    </S.Container>
  )
}