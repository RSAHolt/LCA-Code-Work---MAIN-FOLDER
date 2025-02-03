import {getEmployeeById,getEmployeeData,getEmployeesSa,insertEmployee,deleteEmployee,deleteEmployees} from '../model/employeesDb.js'

const getEmployeesCon = async(req,res)=>{
    res.json({employees:await getEmployeeData()})
}
const getEmployeeCon = async(req,res)=>{
    res.json({employees:await getEmployeeById(req.params.id)})
}
const getEmployeesSaCon = async(req,res)=>{
    res.json({employees:await getEmployeesSa()})
}
const postEmployeeCon = async(req,res)=>{
    let {first_name, last_name, email, phone_number, department_id, salary } = req.body
    res.json({employees:await insertEmployee(first_name, last_name, email, phone_number, department_id, salary)})
}
const deleteEmployeeCon = async(req,res)=>{
    res.json({employees:await deleteEmployee(req.params.id)})
}

const deleteEmployeesCon = async(req,res)=>{
    res.json({employees:await deleteEmployees()})
}


export {getEmployeesCon,getEmployeeCon,getEmployeesSaCon,postEmployeeCon,deleteEmployeesCon,deleteEmployeeCon}