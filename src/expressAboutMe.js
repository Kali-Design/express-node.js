/* Ajouter une route /aboutme qui retournera à l'utilisateur des informations à propos de vous*/

import express from 'express'
const app = express()

const PORT = 7777

const IP_LOOPBACK = 'localhost'
const IP_LOCAL = '127.0.0.1'  


app.get('/add/aboutme', (req, res) => {
  res.send('Exercices express partie 1')
})

app.listen(PORT, IP_LOCAL, () => {
  
  console.log(`app listening at http://localhost:${PORT}`)
})

//Browser localhost:7777