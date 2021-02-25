const express = require('express')

const cors = require('cors')
const helmet = require('helmet')

const auth = require('../api/auth/authenticate-middleware.js')
const productRoute = require('../productRoute/productsRoute.js')
const authRouter = require('../api/auth/auth-router.js')
const userRouter = require('../api/users/userRouter')


const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.get('/', (req,res)=>{
    res.status(200).json('server is up')
})

server.use('/osfow/auth', authRouter)
server.use('/osfow/users', auth, userRouter)
server.use('/osfow/products', productRoute )


module.exports = server