import { Router } from 'express'
import courseRoutes from './courses'

const router = Router()

router.use('/courses', courseRoutes)

export default router