require('dotenv').config()
const express = require('express')

const app = express();

app.get('/' , (req , res)=>{
    res.send('Hello World');
})
app.get('/t' , (req , res)=>{
    res.send('Hello t');
})

app.listen(process.env.PORT , ()=>{
    console.log(`there app will be listening on the port : ${process.env.PORT}`)
})