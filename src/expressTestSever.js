/* Ecrivez un script testServer.js qui se connectera aux différentes url de votre serveur et 
qui affichera dans la console les messages récupérés. testServer.js utilisera l
e package axios pour éffectuer les requêtes HTTP sur votre serveur express*/import express from 'express'

import fs from 'fs/promises'
import axios from 'axios'

try {
    let response = await axios.get(
        'http://localhost:7777/',
        'http://localhost:7777/aboutyou',
        'http://localhost:7777/aboutme',
        'http://localhost:7777/vote',
        'http://localhost:7777/vote/:age',
        'http://localhost:7777/vote',
        'http://localhost:7777/palindrome/:word',
        'http://localhost:7777/oddstest/:num'
    )
    let content = response.data
    await fs.writeFile(file, content)
    console.log(response.data)
} catch (e) {
    console.error(e)
}