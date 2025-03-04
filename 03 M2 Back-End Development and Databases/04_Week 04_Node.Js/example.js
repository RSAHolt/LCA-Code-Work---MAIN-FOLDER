//importing express module
import express from 'express';

//initialised / created project
const app = express();
const PORT = process.env.PORT || 3000

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

