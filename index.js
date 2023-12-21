const express =require('express')
const app =express()
const cors =require("cors")
const jwt = require('jsonwebtoken');
require('dotenv').config()
const port = process.env.PORT || 5009;

app.get('/', (req, res) => {
    res.send('camp is running')
  })
  
  app.listen(port, () => {
    console.log(`Medical Camp is Running on port ${port}`);
  })