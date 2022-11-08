import React from 'react'
import * as S from './style'
import {TbResize } from "react-icons/tb";
import { SiMicrosoftexcel } from "react-icons/si";
import { VscJson, VscFilePdf } from "react-icons/vsc";
import { AiOutlineFileJpg, AiFillFileWord } from "react-icons/ai";
import { Link } from 'react-router-dom';

type Items = {
  name: string;
  link: string;
  icon: any
}

export function Sidebar() {
    const items : Items[] = [
      { name: 'Redimencionar', icon: <TbResize/>, link: '/' },
      { name: 'Excel', icon: <SiMicrosoftexcel/>, link: '/' },
      { name: 'Json', icon: <VscJson/>, link: '/' },
      { name: 'PDF', icon: <VscFilePdf/>, link: '/' },
      { name: 'Word', icon: <AiFillFileWord/>, link: '/' },
      { name: 'JPG', icon: <AiOutlineFileJpg/>, link: '/' },
    ]
  return (
    <S.Container>
      <ul>
        { items.map((item) => (
          <Link to={item.link}>
            <li>
              <span>{item.name}</span>
              <span>{item.icon}</span>
            </li>
          </Link>
        )) }
      </ul>
    </S.Container>
  )
}