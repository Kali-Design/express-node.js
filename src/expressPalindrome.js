/* Ajouter une route /palindromequi prendra un mot en paramètre. Un message devra être retourné à l
'utilisateur si le mot est un palindrome.*/

import express from 'express'

const app = express()

const PORT = 7777

const IP_LOOPBACK = 'localhost'
const IP_LOCAL = '127.0.0.1'  

app.get('/palindrome/:word', (req, res) => {
    let word = req.params.word

    const isPalindrome = (str) => {
        str = str.toLowerCase()
        return str.split('').reverse().join('').toLowerCase() == str
    }
    res.send(`${isPalindrome(word)}`)
})