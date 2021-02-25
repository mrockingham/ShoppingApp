const router = require('express').Router()
const UsersDb = require('./userModel')
const bcryptjs= require('bcryptjs')


router.get('/', (req,res) =>{
    UsersDb.find()
    .then(users =>{
        res.json(users)
    })
    .catch(err =>{
        res.status(500).json({message: 'Failed to get users'})
    })
})

router.get('/:id', (req,res)=>{
    const {id} = req.params;        

    UsersDb.findById(id)
    .then(user =>{
        if(user) {
            res.json(user)
        } else {
            res.status(404).json({message: 'could not find user'})
        }
    })
    .catch(err =>{
        res.status(500).json({message: 'could not get user'})
    })
})

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const  changes = req.body;
    const rounds = process.env.BCRYPT_ROUNDS || 8;
    const hash = bcryptjs.hashSync(changes.password, rounds);
    changes.password = hash
    UsersDb.findById(id)
    .then(user => {
      if(user){
          UsersDb.update(changes, id)
          .then(updateUser =>{
              changes.password = 'updated'  
              res.json({
                changes: changes
              })

              console.log(changes)
          })
      }else {
          res.status(404).json({message: "can't find user"})
      }
    })
    .catch(err =>{
        res.status(500).json({message: 'Failed to update user'})
    })
})

module.exports =router