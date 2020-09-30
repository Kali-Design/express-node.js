/* Créer une programme app.js qui utilise express. Cette application devra tourner sur localhost et le port 7777. 
Avec votre navigateur en se connectant sur http://localhost:7777 on devra récupérer le message 'Exercices express partie 
1' Pour cela il faudra créer une route qui manage le path / */

import express from 'express'
const app = express()

const PORT = 7777

app.get('/', (req, res) => {
  res.send('Exercices express partie 1')
})

app.listen(PORT, () => {
  
  console.log(`app listening at http://localhost:${PORT}`)
})

//Browser localhost:7777