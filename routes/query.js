var express = require('express');
var router = express.Router();


var MongoClient = require('mongodb').MongoClient ;
var DB_CONN_STR = 'mongodb://localhost:27017/xiShuaShua';

var selectData=function (db,callback) {
    var collection=db.collection('room');
    var whereStr ={"_id":1};
    collection.find(whereStr).toArray(function(err,result){
        if(err){
            console.log('Error:'+err);
            return;
        }
        callback(result);
    });
}
MongoClient.connect(DB_CONN_STR,function (err,db) {
    console.log("连接成功!");
    selectData(db,function (result) {
        console.log(result);
        db.close();
    });
});

module.exports = router;