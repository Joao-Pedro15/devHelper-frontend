import express, { Request, Response, Router } from 'express'
import { images } from './index'
const router = Router()

router.use('/images', images.default)

export default router