var express = require('express');
var request = require('request');
var convert = require('xml-js');
var router = express.Router();

const producerModel = require('../db/models/producer')
const theaterManagerModel = require('../db/models/theaterManager')

const theaterModel = require('../db/models/theater');

/* GET users listing. */
router.get('/', function(req, res, next) {
  request('http://www.kopis.or.kr/openApi/restful/prfplc?service=bf1f3f149c284564bd1cd14efc61818f&cpage=1&rows=20',function(err, response, body){
      if(!err && response.statusCode == 200){
          var xml = body;
          var result = convert.xml2json(xml, {compact: true, spaces: 4});
          var answer = JSON.parse(result);

          for (var i in answer.dbs.db){
            var ans = answer.dbs.db[i];
            console.log(ans);
            var theater = new theaterModel({
                theaterID: ans.mt10id._text,
                city: ans.sidonm._text,
                name: ans.fcltynm._text,
                openYear: ans.opende._text,
            })

            theater.save(function(err){
                if(err)
                    console.log("저장 안됨!!");
            })
          }
          res.send("완료");
      }
  })
});

router.get('/list',function(req, res, next){
    theaterModel.find({}, async function(err, result){
        for(var item of result){
            await waitFunc(item);
        }
        res.send("다시 저장 완료");
    })
})
router.get('/search/:location/:minSize/:maxSize',function(req, res, next){
    minSize = parseInt(req.params.minSize);
    maxSize = parseInt(req.params.maxSize);
    theaterModel.find({
        city:req.params.location,
        size:{$gte:minSize},
        size:{$lte:maxSize}
    }, function(err, theaters){
            if(err) console.log(err)
            console.log(theaters);
            res.send(theaters);
    })
})

function waitFunc(i){
    var id = i.theaterID;
    console.log(id);
    var url = "http://www.kopis.or.kr/openApi/restful/prfplc/"+id+"?service=bf1f3f149c284564bd1cd14efc61818f"
    request(url,function(err, response, body){
        var xml = body;
        var result = convert.xml2json(xml, {compact: true, spaces: 4});
        var answer = JSON.parse(result).dbs.db;
        console.log(answer);
        theaterModel.findOneAndUpdate({theaterID:id},{
            size: answer.seatscale._text,
            telNumber: answer.telno._text,
            location: answer.adres._text
        },{upsert:true, 'new': true},function(err, result){
            if(err)
            console.log("업데이트 실패");

        });
    });
}

router.get('/theater/:id', function(req, res, next){
  theaterModel.findOne({theaterID: req.params.id}, function(err, result){
    if(err) console.log(err);
    res.send(result);
  })
});


module.exports = router;
