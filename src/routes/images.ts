import { Request, Response, Router } from 'express'
const router = Router()

import multer from 'multer'
import { MulterConfig } from '../middlewares/multer'
import { resizeImage } from '../middlewares/sharp'

router.get('/', async (request: Request, response: Response) => {
    try {
        return response.send('hello wolrd')
    } catch (error) {
        return response.status(500).json(error)
    }
})

router.post('/resize', multer(MulterConfig).single('file'), resizeImage)

export default router