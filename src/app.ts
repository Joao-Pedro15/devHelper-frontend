import express, { Request, Response } from 'express'
import cors from 'cors'
import path from 'path'

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.get('/api', async(request: Request, response: Response) => {
    try {
        return response.status(200).json({message: 'Hello Word!'})
    } catch (error) {
        return response.status(500).json(error)
    }
})

app.use(express.static(path.join(__dirname, '../client/build')))

app.get('*', (request: Request, response: Response) => {
    return response.sendFile(path.join(__dirname, '../client/build/index.html'), (error) => {
        if(error) return response.status(500).json(error)
    })
})


app.listen(3000, () => {
    console.log('Server running on port', 3000);
})