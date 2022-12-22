import React from 'react'
import * as S from './style'
import { VscJson, VscFilePdf } from "react-icons/vsc";

type IProps = {
  image?: string | any;
  title: string;
  actions: string[] | string
  color?: string
  active?: boolean
}

function Card({ actions, image, title, color, active } : IProps) {
  return (
    <S.Container active={active}>
      <S.Main>
      <div>
        <VscFilePdf />
        <h4>{title}</h4>
      </div>
        <div></div>
        { typeof actions === 'string' ? (
          <p>{actions}</p>
        ) : (
          <>
            {actions.map(action => {
              return(
                <p>{action}</p>
              )
            })}
          </>
        ) }
      </S.Main>
      <small>{ active ? 'Ativo' : 'Em breve'  }</small>
    </S.Container>
  )
}

export { Card }
