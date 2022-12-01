import { Request, Response, Router } from 'express'
const router = Router()

import multer from 'multer'
import { MulterConfig } from '../middlewares/multer'
import { resizeImage } from '../middlewares/sharp'
import { changeExtension } from '../middlewares/jimp'
import jimp from 'jimp'
import { join } from 'path'

router.get('/', async (request: Request, response: Response) => {
    try {
        return response.send('hello wolrd')
    } catch (error) {
        return response.status(500).json(error)
    }
})

router.post('/resize', multer(MulterConfig).single('file'), resizeImage)

router.post('/changeExtension', (request: Request, response: Response) => {
    const input = join(__dirname, '..', 'uploads', 'maykao.jpg')
  const output = join(__dirname, '..', 'images', 'maykao.pdf')
  
  jimp.read(input, function(error, image){
    if(error) return response.status(500).send(error.message)
    image.write(output)
    return response.status(200).send("deu certo!")
  })
})
export default router