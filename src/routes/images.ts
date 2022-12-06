import { Request, Response, Router } from 'express'
const router = Router()

import multer from 'multer'
import { MulterConfig } from '../middlewares/multer'
import { resizeImage } from '../middlewares/sharp'
import { convertImage } from '../middlewares/jimp'

router.get('/', async (request: Request, response: Response) => {
    try {
        return response.send('hello wolrd')
    } catch (error) {
        return response.status(500).json(error)
    }
})

router.post('/resize', multer(MulterConfig).single('file'), resizeImage)

router.post('/convert', multer(MulterConfig).single('file'), convertImage)

export default router