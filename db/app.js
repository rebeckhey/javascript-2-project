const express = require ('express') //hämtar express
const app = express() //initialiserar express
const cors = require ('cors') //middleware som kan tillåta eller begränsa åtkomst, speciellt användbart när man vill skapa ett publikt API
const controller= require ('./controller/controller') //hämtar controller

app.use(cors()) 
app.use(express.urlencoded({extended:false}))
app.use(express.json()) //ger oss json tillbaka så att vi kan tolka det.
app.use('/api/items', controller) //för att använda controllern
module.exports=app //exporterar appnp