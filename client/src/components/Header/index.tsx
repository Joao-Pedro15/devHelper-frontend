import React, { Dispatch, SetStateAction, useState } from 'react'
import * as S from './style'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { HiMenu } from "react-icons/hi"

type IProps = {
  toggle: boolean,
  setToggle: Dispatch<SetStateAction<boolean>>
}

export function Header({ setToggle, toggle } : IProps) {
  return (
    <S.Container>
      <div>
      <div>
        <button
        onClick={() => setToggle(!toggle)}
        >
          {!toggle ? <HiMenu/> : <HiMenu />}
        </button>
      </div>
      <div>Quem ta logado</div>
      </div>
    </S.Container>
  )
}