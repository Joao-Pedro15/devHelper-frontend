import React from 'react'
import { Card } from '../../components/Card'
import { Layout } from '../../components/Layout'
import * as S from './style'

export function Home() {
  const action = 'opa'
  return (
    <Layout>
      <S.Container>
        <h1>Todos os serviços</h1>
        <div>
          <Card title='PDF' key={1} actions={[action, action, action, action]}  />
        </div>
      </S.Container>
    </Layout>
  )
}