const express = require('express')
const products = require('../data/products.js')
const cors = require('cors')
const helmet = require('helmet')

const productRoute = require('../productRoute/productsRoute.js')
const authRouter = require('../api/auth/auth-router.js')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.get('/', (req,res)=>{
    res.status(200).json('server is up')
})
server.use('/osfow/user', authRouter)
server.use('/osfow/products', productRoute )


module.exports = server