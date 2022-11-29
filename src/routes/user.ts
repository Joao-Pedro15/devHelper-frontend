import { Router, Request, Response } from 'express'
import { authMiddleware } from '../middlewares/auth'

const router = Router()

type ILogin =  {
  username: string
  password: string
}

router.post('/user', async (request: Request, response: Response) => {
  const { username, password } : ILogin = request.body
  try {
    if(!username.trim() || !password.trim()) throw new Error('username and password not empty!')


  } catch (error:any) {
    return response.status(error.statusCode).json({message: error.message})
  }
})

router.get('/allUsers', authMiddleware, async (request: Request, response: Response) => {
  const users = [
    {username: 'alonedw', password: 'nonpassword'},
    {username: 'rockabillyboy', password: 'loremIpsum'}
  ]
  try {
    return response.status(200).json(users)
  } catch (error:any) {
    return response.status(error.statusCode).json({message: error.message})
  }
})


export default router