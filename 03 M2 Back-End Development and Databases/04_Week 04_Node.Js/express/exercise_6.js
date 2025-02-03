import express from 'express'
import cors from 'cors'
// import routes that we exported
import employeesRouter from './routes/employeesRouter.js'

const PORT = process.env.PORT ||3000
const app = express()
app.use(cors({
    origin:'http://localhost:8080'
}))
app.use(express.json())
// path , imported file
app.use('/employees', employeesRouter)

app.listen(PORT,()=>{
console.log('http://localhost:'+PORT);
})
