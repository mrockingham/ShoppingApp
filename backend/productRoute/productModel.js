const db = require('../data/dbConfig.js')

module.exports = {
    get,
    getById,
    // insert,
    // update,
    // remove,
  };


  //Get
  function get(){
    return db('products')
  }

  //Get By ID

  function getById(id){
    return db('products')
    .where({id})
    .first()
  }

