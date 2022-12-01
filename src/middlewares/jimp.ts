
import { Response, Request } from 'express'
import jimp from 'jimp'
import { join } from 'path'

export function changeExtension(response: Response) {
  const input = join(__dirname, '..', 'uploads', 'maykao.jpg')
  const output = join(__dirname, '..', 'uploads', 'maykao.png')
  
  jimp.read(input, function(error, image){
    if(error) return response.status(500).send(error.message)
    image.write(output)
    return response.status(200).send("deu certo!")
  })
}