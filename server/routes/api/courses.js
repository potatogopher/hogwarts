import { Router } from 'express'
import courseController from '../../controllers/courses'

const router = Router()

router.get('/', courseController.index)
router.get('/:id', courseController.show)
router.get('/', courseController.create)
router.get('/:id', courseController.edit)
router.get('/:id', courseController.delete)

export default router