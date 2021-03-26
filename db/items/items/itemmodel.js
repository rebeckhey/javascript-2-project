// const { request } = require('express')
const mongoose = require ('mongoose'); //hämtar mongoose
const item = require ('./objectSchema'); //item från objectschema

//Här läggs methods GET, POST, DELETE m.m

exports.GET_item = (request, response) => {
    item.find()    //söker på allt, kommer att ta lite tid för att söka på alla 
    .then(data => response.status(200).json(data))    //om allt går bra får vi statuskod 200 och vi får json tillbaka
    .catch(error => response.status(500).json(data))      //om det inte skulle gå bra får vi tillbaka statuskod 500 som tyder på serverfel               
}

exports.GET_oneitem = (request, response) =>{ //hämta endast ett objekt
    item.findById(request.params.id)                             //letar på id på de requests som gjorts, döper parametet till id. Jämför med det som skrivits in
    .then(item => response.status(200).json(item))
    .catch(error => response.status(500).json)
}

exports.POST_item = (request, response) => {                     //funktion som låter oss lägga upp ett nytt objekt
item.exists({ name: request.body.name }, (error, answer) => {
    if(error){
        return response.status(500).json(error)
    }else {
        if(answer){
            return response.status(400).json({
                statuscode: 400,
                status:false,
                message: 'The object is already in the database'
            })
        }
        const NEWitem = new item ({                   //produkten som skapas efter en post. En ny instans skapas
            name: request.body.name,
            description: request.body.description,
            price: request.body.price,
            img: request.body.img
        })
        NEWitem.save()
        .then(()=>{
            response.status(201).json({
                statuscode:201,
                status:true,
                message: 'Object successfully posted'
            })
        })
        .catch(()=>{
            response.status(500).json({
                statusCode: 500,
                status: false,
                message: 'failed to post item'
            }
            )
        })
    }

})
}

exports.DELETE_item = (request, response) =>{
    item.exists({_id: request.params.id}, (error, answer)=>{
        if(error){
            return response.status(400).json(error)
        }
        else{
            if(answer){
                item.deleteOne({_id: request.params.id})
                .then(()=>{
                    response.status(200).json({
                        statuscode:200,
                        status: true,
                        message: 'item sucessfully deleted!'
                    })
                })
                .catch(()=>{
                    response.status(500).json({
                        statuscode:500,
                        status: false,
                        message:'server could not delete, something went wrong'
                    })
                })
            }
            else{
                return response.status(404).json({
                    statuscode:404,
                    status: false,
                    message: 'The item cannot be found in database'
                })
            }
        }
        
    })
}