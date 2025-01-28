import express from 'express';
import mysql2 from 'mysql2'

const app = express();

const con = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "2378",
    database: "db01"
  });
  
  con.connect((error) => {
    if (error) {
      console.error('Error connecting to MySQL database:', error);
    } else {
      console.log('Connected to MySQL database!');
    }
  });

  con.end();