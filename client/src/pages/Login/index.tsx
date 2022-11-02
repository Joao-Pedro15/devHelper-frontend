import React, { ChangeEvent, FormEvent, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import * as S from './style'

interface ILogin {
  email: string,
  password: string
}

export function Login() {
  const history = useHistory()
  const { userLogged, setUserLogged } = useContext(AuthContext)
  const [form, setForm] = useState<null | ILogin>(null)

  const handleInput = (e:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev:any) => ({
      ...prev,
      [name]: value
    }))
  } 

  const LoginFn = (e:FormEvent) => {
    e.preventDefault()
    localStorage.setItem('_user', JSON.stringify(form))
    setUserLogged(form)
    window.location.href = './home'

  }

  return (
    <S.Container>
      <h1>Dev<span>Helper</span></h1>
      <form onSubmit={(e:FormEvent) => LoginFn(e)}>
        <section>
          <label htmlFor="email">Email</label>
          <input name="email" type="email" placeholder="Ex: example@gmail.com" onChange={handleInput} />
        </section>
        <section>
          <label htmlFor="password">Senha</label>
          <input name="password" type="password" placeholder="Digite sua senha" onChange={handleInput} />
        </section>
        <button type="submit">Login</button>
      </form>
    </S.Container>
  )
}  