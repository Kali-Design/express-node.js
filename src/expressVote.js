/* Ajouter une route /vote qui contient 1 paramètre qui correspondera à l'age. En fonction de l'age passé en paramètre on retournera les messages suivants dans le navigateur:

si age < 18, par example http://localhost:7777/age/17, on devra retourner 'trop jeune pour voter'
si age >= 18, par example http://localhost:7777/age/19, on devra retrouver 'Vous pouvez voter'*/

import express from 'express'

const app = express()

const PORT = 7777

const IP_LOOPBACK = 'localhost'
const IP_LOCAL = '127.0.0.1'  


app.get('/vote', (req, res) => {
    res.send(
        'Enter un âge valide après /vote/(num) pour savoir si vous pouvez voter!!'
    )
})

app.get('/vote/:age', (req, res) => {
    let age = req.params.age

    if (isNaN(age) || age > 120 || age < 0) {
        res.send('Usage : entrez une valeur numérique correcte entre 0 et 120')
    } else if (age < 18) {
        res.send('Information : Vous ne pouvez pas voter!')
    } else res.send('Information : Vous pouvez voter !')
})