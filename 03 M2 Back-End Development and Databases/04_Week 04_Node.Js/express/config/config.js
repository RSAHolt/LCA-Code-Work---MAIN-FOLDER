import mysql from 'mysql2/promise'; // /promise allows you to use async and await functions
import { config } from 'dotenv';
config()
const pool = mysql.createPool({
    hostname: process.env.HOSTNAME,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

export {pool}