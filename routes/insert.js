
var express = require('express');
var router = express.Router();


var MongoClient = require('mongodb').MongoClient ;
var DB_CONN_STR = 'mongodb://localhost:27017/xiShuaShua';

var insertDate = function(db,callback){
    var collection = db.collection('room');
    var date=[{"_id":3,"time":["17:00~18:00","18:00~19:00","19:00~20:00","20:00~21:00","21:00~22:00"],"state":[0,0,0,0,0]}];
    collection.insert(date,function(err,result){
        if(err){
            console.log('Error:'+err);
            return;
        }
        callback(result);
    });
}
MongoClient.connect(DB_CONN_STR,function (err,db) {
    console.log("连接成功!");
    insertDate(db,function(result){
        console.log(result);
        db.close();
    });
});

module.exports = router;

