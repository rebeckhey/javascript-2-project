const router = require ('express').Router() //hämtar router från express
const itemmodel = require ('../items/items/itemmodel') //hämtar funktionalitet från itemmodel
router.get('/', itemmodel.GET_item) //gör Gets på alla
router.get('/:id', itemmodel.GET_oneitem)//gör gets på specifikt id
router.post('/new', itemmodel.POST_item)
router.delete('/:id', itemmodel.DELETE_item)
module.exports = router //exporterar router