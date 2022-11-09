import React from 'react'
import * as S from './style'

type IProps = {
  image?: string | any;
  title: string;
  actions: string[] | string
  color?: string
}

function Card({ actions, image, title, color } : IProps) {
  return (
    <S.Container>
      <header>
        <div></div>
        <img src={image} alt="icone do serviço" />
      </header>
      <main>
        <h4>{title}</h4>
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
      </main>
    </S.Container>
  )
}

export { Card }
