import { pool } from "../config/config.js"

const getEmployeeData = async () =>{
    let [data] = await pool.query('SELECT * FROM  employees')
    return data
};

const getEmployeeById = async (id) =>{
    let [data] = await pool.query('SELECT * FROM  employees WHERE employee_id = ?',[id])
    return data
};

const getEmployeesSa = async () =>{
    let [data] = await pool.query("SELECT * FROM `employees` LEFT JOIN `departments` on employees.department_id = departments.department_id WHERE departments.location = 'South Africa'")
    return data
};

const insertEmployee= async(first_name, last_name, email, phone_number, department_id, salary) => {
   await pool.query("INSERT INTO pick_n_steal.employees (first_name, last_name, email, phone_number, department_id, salary) VALUES (?, ?, ?,?,?,?)",[ first_name, last_name, email, phone_number, department_id, salary])
    return getEmployeeData()
};
const deleteEmployee = async(id) => {
    await pool.query("DELETE FROM pick_n_steal.employees WHERE employee_id = ?",[id])
    return getEmployeeData()
};

const deleteEmployees = async() => {
    await pool.query("DELETE FROM pick_n_steal.employees")
    return getEmployeeData()
};

export {getEmployeeById,getEmployeeData,getEmployeesSa,insertEmployee,deleteEmployee,deleteEmployees}