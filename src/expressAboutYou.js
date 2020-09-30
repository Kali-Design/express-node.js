/* Ajouter une route /aboutyou qui retournera à l'utilisateur des informations le concernant comme:
son ip
son user agent, c'est la version de son navigateur. Cette information peut être extraite depuis la 
propriété headers de la requête de l'utilisateur*/

import express from 'express'

const app = express()

const PORT = 7777

const IP_LOOPBACK = 'localhost'
const IP_LOCAL = '127.0.0.1'  

app.get('/add/aboutyou', (req, res) => {
  res.send('Exercices express partie 1')
})

app.listen(PORT, IP_LOCAL, () => {
  
  console.log(`app listening at http://localhost:${PORT}`)
})

//Browser localhost:7777