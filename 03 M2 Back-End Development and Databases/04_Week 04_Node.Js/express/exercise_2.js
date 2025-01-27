//importing express module
import express from 'express';

//initialised / created project
const app = express();
const PORT = process.env.PORT || 3000

app.get('/employees',(req,res)=>{
    res.json({
        message:"This is the GET employee path"
    })
})

app.get('/managers',(req,res)=>{
    res.json({
        message:"this is the GET manager path"
    })
})

app.post('/employees',(req,res)=>{
    res.json({
        message:"This is the POST path for employees"
    })
})

app.post('/managers',(req,res)=>{
    res.json({
        message:"This is the POST path for managers"
    })
})

app.put('/employees',(req,res)=>{
    res.send("This is a PUT request for employees")
})

app.put('/managers',(req,res)=>{
    res.send("This is a PUT request for managers")
})

app.patch('/employees',(req,res)=>{
    res.json({
        message:"This is the PATCH employee path"
    })
})

app.patch('/managers',(req,res)=>{
    res.json({
        message:"this is the PATCH manager path"
    })
})

app.delete('/employees',(req,res)=>{
    res.json({
        message:"This is the DELETE employee path"
    })
})

app.delete('/managers',(req,res)=>{
    res.json({
        message:"this is the DELETE manager path"
    })
})


//allows project tobe an API
app.listen(PORT,()=>{
    console.log('http://localhost:' + PORT);
})


