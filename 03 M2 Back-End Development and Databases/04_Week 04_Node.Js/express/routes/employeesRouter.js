import express from "express"
import {getEmployeesCon,getEmployeeCon,getEmployeesSaCon,postEmployeeCon,deleteEmployeesCon,deleteEmployeeCon} from '../controller/employeesController.js'

// manages paths from different file as   I cant use app.get/app.post...cant use const app = express()
const router = express.Router()


router.get('/', getEmployeesCon)
router.get('/SA', getEmployeesSaCon)
router.get('/:id', getEmployeeCon)
router.post('/', postEmployeeCon)
router.delete('/', deleteEmployeesCon)
router.delete('/:id', deleteEmployeeCon)

// allows to be used outside of file
export default router
