var express = require('express');
var request = require('request');
var convert = require('xml-js');
var router = express.Router();

const producerModel = require('../db/models/producer')
const theaterManagerModel = require('../db/models/theaterManager')

const theaterModel = require('../db/models/theater');

/* GET users listing. */
router.get('/', function(req, res, next) {
  request('http://www.kopis.or.kr/openApi/restful/prfplc?service=bf1f3f149c284564bd1cd14efc61818f&cpage=1&rows=5',function(err, response, body){
      if(!err && response.statusCode == 200){
          var xml = body;
          var result = convert.xml2json(xml, {compact: true, spaces: 4});
        //   var answer = result.dbs.db;
          console.log(result);

        //   for (var ans in result){
        //     var theater = new theaterModel({
        //         theaterID: ans.mt10id,
        //         location: ans.sidonm,
        //         name: ans.fcltynm,
        //         openYear: ans.opendet,
        //     })
        //     console.log(ans.fcltynm);

        //     theater.save(function(err){
        //         if(err)
        //             console.log("저장 안됨!!");
        //     })
        //   }

          res.send(result);
      }
  })
});

module.exports = router;
