const express = require("express");

const app = express();


const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nodeApp',{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("CONNECTION OPEN!!!");
})
.catch(err => {
    console.log("OH NO ERROR!!!")
    console.log(err);
})


app.get('/', (req, res) => {
    res.send("SISTEMA CARREGADO");
})


app.listen(3000, () => {
    console.log("Liste on port 3000");
})