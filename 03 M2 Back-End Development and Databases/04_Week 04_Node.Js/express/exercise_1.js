//importing express module
import express from 'express';

//initialised / created project
const app = express();
const PORT = process.env.PORT || 3000

app.get('/products',(req,res)=>{
    res.json({
        message:"This is the GET product path"
    })
})

app.get('/users',(req,res)=>{
    res.json({
        message:"this is the GET user path"
    })
})

app.post('/products',(req,res)=>{
    res.json({
        message:"This is the POST path for products"
    })
})

app.post('/users',(req,res)=>{
    res.json({
        message:"This is the POST path for users"
    })
})

app.put('/products',(req,res)=>{
    res.send("This is a PUT request for products")
})

app.put('/users',(req,res)=>{
    res.send("This is a PUT request for users")
})

app.patch('/products',(req,res)=>{
    res.json({
        message:"This is the PATCH product path"
    })
})

app.patch('/users',(req,res)=>{
    res.json({
        message:"this is the PATCH user path"
    })
})

app.delete('/products',(req,res)=>{
    res.json({
        message:"This is the DELETE product path"
    })
})

app.delete('/users',(req,res)=>{
    res.json({
        message:"this is the DELETE user path"
    })
})


//allows project tobe an API
app.listen(PORT,()=>{
    console.log('http://localhost:' + PORT);
})


