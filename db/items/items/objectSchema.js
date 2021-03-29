const mongoose = require ('mongoose') //hämtar mongoose
const object = mongoose.Schema({ //definierar hur objektets strukur ska se ut
    
    _id: mongoose.Schema.Types.ObjectId,
    name:{type: String, required: true},
    description:{type: String, required: true},
    price:{type: String, required: true},
    img:{type: String, required: true},
    

})
module.exports = mongoose.model('item', object) //exporterar och beskriver att det kommer att heta item (items) och att det kommer se ut som objektet