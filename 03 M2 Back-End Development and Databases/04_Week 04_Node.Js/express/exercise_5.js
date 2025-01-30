import mysql from 'mysql2/promise'; // /promise allows you to use async and await functions
import express from 'express'
import {config} from 'dotenv'
config()
const pool = mysql.createPool({
    hostname: process.env.HOSTNAME,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})
const app = express()
//3 -- allows json data to be entered in th3e app
app.use(express.json)
app.get('/fruit', async (req,res)=>{
    res.json({fruits: await getFruits()})
})
app.get('/fruits/:id', async (req,res)=>{
    res.json({fruits: await getSingleFruit(req.params.id)})
})
//1 path to add new item
app.post('/fruits', async(req,res)=>{
    //3 check that data is coming from the frontend --use thunder client
    console.log(req.body);
    res.json({
        fruits: await insertFruit(fruit_name,fruit_colour,seeds)
    })
})
app.listen(3000,()=>{
    console.log('http://localhost:3000');
})
const getFruits = async ()=>{
    let [data] = await pool.query('SELECT * FROM fruit_list')
    return data
}
const getSingleFruit = async (id)=>{
    let [data] = await pool.query('SELECT * FROM fruit_list WHERE id = ?',[id])
    return data
}
// 2 make function
const insertFruit = async()=>{
    pool.query('INSERT INTO `fruits`.`fruit_list` (`fruit_name`, `fruit_colour`, `seeds`) VALUES (?, ?, ?)', [fruit_name, fruit_colour, seeds])
    return await getFruits()
}
console.log(await getFruits());
console.log(await getSingleFruit(1));
console.log('pause');