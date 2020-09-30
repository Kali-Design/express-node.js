/* Ajouter une route /oddtest qui prendra un nombre en paramètre. Un message devra être retourné pour indiquer que le nombre passé en paramètre est pair ou impair

si le nombre est pair, par example http://localhost:7777/oddtest/2, on devra retourner 'pair'
si le nombre est impair, par example http://localhost:7777/oddtest/19, on devra retrouver 'impair'*/

import express from 'express'

const app = express()

const PORT = 7777

const IP_LOOPBACK = 'localhost'
const IP_LOCAL = '127.0.0.1'  

app.get('/oddtest/:num', (req, res) => {
    let num = req.params.num

    const isOdd = (number) => {
        return number % 2 === 1
    }

    res.send(`${isOdd(num)}`)
})

app.listen(PORT, () => {
    console.log(`app listening at http://localhost:${PORT}`)
})