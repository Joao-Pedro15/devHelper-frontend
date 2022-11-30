import React, { FormEvent, useState } from 'react'
import { Layout } from '../../components/Layout'
import { API } from '../../services/api'
import * as S from './style'

export function Resize() {
  const [image, setImage] : any = useState()

  const onSubmit = async(e:FormEvent) => {
    e.preventDefault()
    const data = new FormData()
    data.append('file', image)
    
    await API.post('/images/resize?width=300', data)
    
    console.log('opa opa opa em ');
    
  }
  return (
    <Layout>
      <S.Container>
        <h1>Redimensionamento</h1>
        <form onSubmit={onSubmit}>
          <input type="file" onChange={(e:any) => setImage(e.target.files[0])} />
          <button type='submit'>Redimensionar</button>
        </form>
      </S.Container>
    </Layout>    
  )
}
