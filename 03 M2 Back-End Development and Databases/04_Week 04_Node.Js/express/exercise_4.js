import mysql from 'mysql2/promise'
import express from 'express'
import {config} from 'dotenv'
config();

const pool = mysql.createPool({
    hostname: process.env.HOSTNAME,
    user: process.env.USER ,
    password: process.env.PASSWORD ,
    database: process.env.DATABASE
});

const app = express();
app.use(express.json);

app.listen(3000,()=>{
    console.log('http://localhost:3000');
});