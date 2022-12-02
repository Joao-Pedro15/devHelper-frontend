
import { Response, Request, NextFunction } from 'express'
import jimp from 'jimp'
import { join } from 'path'

export function convertImage(request: Request, response: Response, next: NextFunction) {
  const input = join(__dirname, '..', 'uploads', 'maykao.jpg')
  const output = join(__dirname, '..', 'images', 'maykao.png')
  
  jimp.read(input, function(error, image){
    if(error) return response.status(500).send(error.message)
    image.write(output)
    return response.status(200).send("deu certo!")
  })
}