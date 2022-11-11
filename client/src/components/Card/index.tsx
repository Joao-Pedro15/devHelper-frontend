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
      </S.Header>
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
    </S.Container>
  )
}

export { Card }
