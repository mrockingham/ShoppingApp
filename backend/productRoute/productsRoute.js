const router =require('express').Router()
const { reset } = require('nodemon')
const productModeldb = require('./productModel.js')

router.get('/', (req, res)=>{

    productModeldb.get()
        .then(products=>{
            res.status(200).json(products)
        })
        .catch(err =>{
            reset.status(500).json({msg: 'no products', err})
        })
    
})

router.get('/:id', (req,res)=>{
    productModeldb.getById(req.params.id)
    .then(products =>{
        if(products){
            res.status(200).json(products)
        }else{
            res.status(404).json({message:'product id not found'})
        }
    })
    .catch(err=>{
        res.status(500).json({message:'failed', err})
    })
        
})


module.exports =router