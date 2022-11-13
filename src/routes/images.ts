import { Request, Response, Router } from 'express'
const router = Router()

import multer from 'multer'
import { MulterConfig } from '../middlewares/multer'


router.get('/', async (request: Request, response: Response) => {
    try {
        return response.send('hello wolrd')
    } catch (error) {
        return response.status(500).json(error)
    }
})

router.post('/resize', multer(MulterConfig).single('file'), async (request: Request, response: Response) => {
    try {
        return response.status(201).json({message: 'file manipulation'})
    } catch (error) {
        return response.status(500).json(error)
    }
})

export default router