// const express = require('express')
import express from "express";

const app = express()
const port = 3000;

app.get('/', (req , res)=>{
    res.send("root");
})
app.get('/jokes', (req , res)=>{
    const jokes = [
        { id: 1, joke: "Why did the developer go broke? Because he used up all his cache!" },
        { id: 2, joke: "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings." },
        { id: 3, joke: "Why was the function so bent out of shape? It got called with too many arguments!" },
        { id: 4, joke: "Why did the programmer quit his job? Because he didn't get arrays!" },
        { id: 5, joke: "Why did the developer go to therapy? Because he had too many 'issues'!" },
      ];
    res.send(jokes)
})

app.listen(port , ()=>{
    console.log(`this are on ${port}`)
})