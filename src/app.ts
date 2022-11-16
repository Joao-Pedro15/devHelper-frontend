import express, { Request, Response } from 'express'
import routes from './routes/router'

import cors from 'cors'
import path from 'path'


const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())


app.use('/api', routes)

app.use(express.static(path.join(__dirname, '../client/build')))

app.get('*', (request: Request, response: Response) => {
    return response.sendFile(path.join(__dirname, '../client/build/index.html'), (error) => {
        if(error) return response.status(500).json(error)
    })
})


app.listen(3000, () => {
    console.log('Server running on port', 3000);
})