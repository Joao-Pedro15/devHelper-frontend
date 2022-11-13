import { Request, Response, Router } from 'express'
const router = Router()

router.get('/', async (request: Request, response: Response) => {
    try {
        return response.send('hello wolrd')
    } catch (error) {
        return response.status(500).json(error)
    }
})

export default router