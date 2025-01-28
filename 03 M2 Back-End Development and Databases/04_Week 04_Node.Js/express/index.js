//importing express module
import express from 'express';
import mysql from 'mysql2/promise'
import {config} from 'dotenv'
config()
//initialised / created project
const app = express();
const PORT = process.env.PORT || 3000
const pool = mysql.createPool({
    hostname: process.env.HOSTNAME,
    user: process.env.USER ,
    password: process.env.PASSWORD ,
    database: process.env.DATABASE
})
 
const getFruits = async() => {
    let [data] = await pool.query('SELECT * FROM fruit_list')
    return data
}

const getSingleFruit = async (id) =>{
    let [data] = await pool.query('SELECT * FROM  fruit_list WHERE id = ?',[id])
    return data
}

console.log( await getFruits());
console.log( await getSingleFruit(1));

app.get('/',(req,res)=>{
    res.json({
        message:"this is the GET method"
    })
})

app.get('/api',(req,res)=>{
    res.json({
        message:"hello there cook master"
    })
})

app.post('/',(req,res)=>{
    res.json({
        message:"you added something new"
    })
})

//allows project tobe an API
app.listen(PORT,()=>{
    console.log('http://localhost:' + PORT)
    console.log('Juan is a poe');
    
})

