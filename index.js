require('dotenv').config()
const express = require('express')
const app = express()
// const port = 3000;

app.get('/', (req, res) => {
  res.send('Hi!');
})
app.get('/signout', (req, res) => {
    res.send('<h1>HIIIIIIIIIIII</hi>')
}) 
app.get('/login', (req, res) => {
    res.send('Welcome to login page!');
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})