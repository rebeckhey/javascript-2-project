const app = require('./app')//importerar app
const mongoose = require('mongoose') //hämtar mongoose (hjälper till med connection till databasen)
require('dotenv').config()//hämtar dotenv så att det går att anvönda det.
const PORT = process.env.port || 8800 //skapar ett portnummer. 8800 om inte miljövariabeln fungerar.
const URL = 'http://localhost:' + PORT // serverns URL
const connects = process.env.MONGODB_CONNECT //hämtar länken utan att den blir synlig i koden.
app.listen(PORT, () => console.log(URL)) // kör igång servern 


mongoose
.set('useCreateIndex', true) 
.connect(connects, { //connectar till databasen och skriver ut att den blir connectad.
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log('connected'))