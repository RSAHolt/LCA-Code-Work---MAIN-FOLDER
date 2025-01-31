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
app.use(express.json)


app.get('/products', async (req,res)=>{
    res.json({products: await getProducts()})
})

app.post('/products',async(req,res)=>{
    let {product_code,product_name,product_price,product_quantity} = req.body
    res.json({products:await insertProduct(product_code,product_name,product_price,product_quantity)})
})

app.delete('products/:id',async(req,res)=>{
    res.json({products:deleteProduct(req.params.id)})
})

app.patch('products/:id',async(req,res)=>{
    let {product_name,product_price,product_quantity,product_code} = req.body
    res.json({products:await updateProduct(product_name,product_price,product_quantity,product_code)})
})

const getProducts = async() => {
    let [data] = await pool.query('SELECT * FROM products')
    return data
}



const deleteProduct = async(id)=>{
    await pool.query('DELETE FROM `shopleft`.`products` WHERE (`product_code` = ?)',[id])
    return await getProducts()
}

const insertProduct = async(product_code, product_name, product_price, product_quantity) => {
    await pool.query("INSERT INTO shopleft_database.products (product_code, product_name, product_price, product_quantity) VALUES (?, ?, ?, ?)",[product_code, product_name, product_price, product_quantity])
    return getProducts()
}

const updateProduct = async(product_name,product_price,product_quantity,product_code)=>{
    await pool.query('UPDATE `shopleft`.`products` SET `product_name` = ?, `product_price` = ?, `product_quantity` = ? WHERE (`product_code` = ?)',[product_name,product_price,product_quantity,product_code])
    return await getProducts()
}

const getUsers = async () =>{
    let [data] = await pool.query('SELECT * FROM  users')
    return data
}
app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT);
    })

    
// deleteProduct('baro1');
// insertProduct('chick1','Chicken Biltong','10.00','1');
// updateProduct('cookie1','Cookie','10.00','2','bear1')
// console.log( await getProducts());
// console.log( await getUsers());
