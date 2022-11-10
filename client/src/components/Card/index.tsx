import React from 'react'
import * as S from './style'
import { VscJson, VscFilePdf } from "react-icons/vsc";

type IProps = {
  image?: string | any;
  title: string;
  actions: string[] | string
  color?: string
}

function Card({ actions, image, title, color } : IProps) {
  return (
    <S.Container>
      <S.Header>
      <div></div>
      <VscFilePdf />
      </S.Header>
      <S.Main>
        <h4>{title}</h4>
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
    </S.Container>
  )
}

export { Card }
