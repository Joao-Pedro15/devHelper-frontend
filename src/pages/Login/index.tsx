import { ChangeEvent, FormEvent, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import * as S from './style'
import { FaConnectdevelop } from 'react-icons/fa'
interface ILogin {
  email: string,
  password: string
}

export function Login() {
  const history = useHistory()
  const { signin } = useContext(AuthContext)
  const [form, setForm] = useState<null | ILogin>(null)

  const handleInput = (e:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev:any) => ({
      ...prev,
      [name]: value
    }))
  } 

  const LoginFn = async (e:FormEvent) => {
    e.preventDefault()
    const isLogged = await signin(form!.email, form!.password)
    if(isLogged) return window.location.href = '/home'
    return alert('Deu ruim!')

  }

  return (
    <S.Container>
     <S.Banner>
      <FaConnectdevelop />
      <h1>DevHelper</h1>
      <p>Desenvolvendo soluções para seus pequenos problemas</p>
     </S.Banner>
     <S.Form>
      <form id='login' onSubmit={LoginFn}>
      <div className="logo">
        <FaConnectdevelop />
        <h2>DevHelper</h2>
      </div>
        <input type="text" name='email' placeholder='Seu email ou usuário' onChange={handleInput} />
        <input type="password" name='password' placeholder='Sua senha' />
        <small><a href="#">Esqueci minha senha</a></small>
      </form>
      <div>
        <input type="submit" value={'Login'} form='login' />
        <span>Não tem uma conta? <a href="#">Criar</a></span>
        <small>Termos de uso</small>
      </div>
     </S.Form>
    </S.Container>
  )
}  