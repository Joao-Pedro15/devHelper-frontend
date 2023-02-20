import * as S from './style'
import { Card } from '../../components/Card'
import { Layout } from '../../components/Layout'
import { CardContainer } from '../../components/CardContainer'

export function Home() {
  const action = ['- PDF para Word', '- Comprimir PDF']
  return (
    <Layout>
      <S.Container>
        <CardContainer>
          <Card title='PDF' key={1} actions={action} active={true} />
          <Card title='PDF' key={1} actions={action}  />
          <Card title='PDF' key={1} actions={action}  />
          <Card title='PDF' key={1} actions={action}  />
          <Card title='PDF' key={1} actions={action}  />
        </CardContainer>
      </S.Container>
    </Layout>
  )
}