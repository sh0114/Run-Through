var express = require('express');
var router = express.Router();

const producerModel = require('../db/models/producer')
const theaterManagerModel = require('../db/models/theaterManager')

/* GET users listing. */
router.get('/', function(req, res, next) {
  producerModel.find({},function(err, pm){
    theaterManagerModel.find({},function(err, tmm){
      console.log(pm)
      console.log(tmm)
      res.json({"p":"hello"})
    })
  })
});

module.exports = router;
