import mysql from 'mysql2/promise'
import express from 'express'
import {config} from 'dotenv'
config()
const PORT = process.env.PORT ||3000

const pool = mysql.createPool({
    hostname: process.env.HOSTNAME,
    user: process.env.USER ,
    password: process.env.PASSWORD ,
    database: process.env.DATABASE
})

const app = express()
app.use(express.json())


app.get('/products', async (req,res)=>{
    res.json({products: await getProducts()})
})

app.post('/products',async(req,res)=>{
    let {product_code,product_name,product_price,product_quantity} = req.body
    res.json({products:await insertProduct(product_code,product_name,product_price,product_quantity)})
})

app.delete('/products/:id',async(req,res)=>{
    res.json({products:await deleteProduct(req.params.id)})
})

app.patch('/products/:id',async(req,res)=>{
    let {product_name,product_price,product_quantity,product_code} = req.body
    res.json({products:await updateProduct(product_name,product_price,product_quantity,product_code)})
})

const getProducts = async() => {
    let [data] = await pool.query('SELECT * FROM products')
    return data
}

const deleteProduct = async(id)=>{
    await pool.query('DELETE FROM `shopleft_database`.`products` WHERE (`product_code` = ?)',[id])
    return await getProducts()
}

const insertProduct = async(product_code, product_name, product_price, product_quantity) => {
    await pool.query("INSERT INTO shopleft_database.products (product_code, product_name, product_price, product_quantity) VALUES (?, ?, ?, ?)",[product_code, product_name, product_price, product_quantity])
    return getProducts()
}

const updateProduct = async(product_name,product_price,product_quantity,product_code)=>{
    await pool.query('UPDATE `shopleft_database`.`products` SET `product_name` = ?, `product_price` = ?, `product_quantity` = ? WHERE (`product_code` = ?)',[product_name,product_price,product_quantity,product_code])
    return await getProducts()
}

app.get('/users', async (req,res)=>{
    res.json({users: await getUsers()})
})

app.post('/users',async(req,res)=>{
    let {id, email, first_name, last_name, password} = req.body
    res.json({users:await insertUser(id, email, first_name, last_name, password)})
})

app.delete('/users/:id',async(req,res)=>{
    res.json({users:await deleteUser(req.params.id)})
})

app.patch('/users/:id',async(req,res)=>{
    let {email, first_name, last_name, password, id} = req.body
    res.json({users:await updateUser(email, first_name, last_name, password, id)})
})

const getUsers = async () =>{
    let [data] = await pool.query('SELECT * FROM  users')
    return data
}

const deleteUser = async(id)=>{
    await pool.query('DELETE FROM `shopleft_database`.`users` WHERE (`id` = ?)',[id])
    return await getUsers()
}

const insertUser = async(id, email, first_name, last_name, password) => {
    await pool.query("INSERT INTO shopleft_database.users (id, email, first_name, last_name, password) VALUES (?, ?, ?, ?,?)",[id, email, first_name, last_name, password])
    return getUsers()
}

const updateUser = async(email, first_name, last_name, password, id)=>{
    await pool.query('UPDATE `shopleft_database`.`users` SET `email` = ?, `first_name` = ?, `last_name` = ?, `password` = ? WHERE (`id` = ?)',[email, first_name, last_name, password, id])
    return await getUsers()
}

app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT);
    })

    
// deleteProduct('baro1');
// insertProduct('chick1','Chicken Biltong','10.00','1');
// updateProduct('cookie1','Cookie','10.00','2','bear1')
// console.log( await getProducts());
// console.log( await getUsers());
