import { AuthContext } from './AuthContext'
import { useState } from 'react'
import { API } from '../services/api'

type AuthProviderType = {
  children: JSX.Element
}

export const AuthProvider = ({ children }: AuthProviderType) => {
  const [user, setUser] = useState<any|null>(null)

  const signin = async (email: string, password: string) => {
    const { data } = await API.post('/users/user', { email, password })
    if(data.user && data.token) {
      setUser(data.user)
      return true
    }
    return false
  }

  const signout = async () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      { children }
    </AuthContext.Provider>
  )
}