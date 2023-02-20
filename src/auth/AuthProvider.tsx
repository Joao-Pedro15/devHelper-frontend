import { AuthContext } from './AuthContext'
import { useEffect, useState } from 'react'
import { API } from '../services/api'

type AuthProviderType = {
  children: JSX.Element
}

export const AuthProvider = ({ children }: AuthProviderType) => {  
  const getToken = () => {
    const token = localStorage.getItem('token')
    return token ? { name: 'joao' } : null
  }

  const [user, setUser] = useState<any|null>(getToken())  
  const signin = async (email: string, password: string) => {
    const { data } = await API.post('/users/user', { email, password })
    if(data.user && data.token) {
        setUser(data.user)
        localStorage.setItem('token', data.token)
        return true
      }
      return false
    }

    useEffect(() => { console.log(user)}, [user])

  const signout = async () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      { children }
    </AuthContext.Provider>
  )
}