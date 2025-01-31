import express from "express"
import {deleteProductsCon, editProductsCon, getProductsCon, postProductsCon} from '../controller/productsController.js'

// manages paths from different file as I cant use app.get/app.post...cant use const app = express()
const router = express.Router()


router.get('/', getProductsCon)
router.post('/', postProductsCon)
router.delete('/:id', deleteProductsCon)
router.patch('/:id',editProductsCon)

// allows to be used outside of file
export default router