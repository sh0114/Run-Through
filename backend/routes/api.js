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
          var answer = JSON.parse(result);
          console.log(answer);

          for (var i in answer.dbs.db){
            var ans = answer.dbs.db[i];
            var theater = new theaterModel({
                theaterID: ans.mt10id._text,
                location: ans.sidonm._text,
                name: ans.fcltynm._text,
                openYear: ans.opende._text,
            })
            console.log(ans.fcltynm._text);

            theater.save(function(err){
                if(err)
                    console.log("저장 안됨!!");
            })
          }

          res.send(result);
      }
  })
});

module.exports = router;
