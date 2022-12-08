import express, { Request, Response, Router } from 'express'
import { images, users } from './index'
const router = Router()

router.use('/images', images.default)
router.use('/users', users.default)

export default router