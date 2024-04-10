// const express = require('express')
import express from "express";
import cors from "cors";

app.use(cors())

const app = express()
const port = 3000;

app.get('/', (req , res)=>{
    res.send("root");
})
app.get('/jokes', (req , res)=>{
    const jokes = [
        { id: 1, content: "Why did the developer go broke? Because he used up all his cache!" },
        { id: 2, content: "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings." },
        { id: 3, content: "Why was the function so bent out of shape? It got called with too many arguments!" },
        { id: 4, content: "Why did the programmer quit his job? Because he didn't get arrays!" },
        { id: 5, content: "Why did the developer go to therapy? Because he had too many 'issues'!" },
      ];
    res.send(jokes)
})

app.listen(port , ()=>{
    console.log(`this are on ${port}`)
})