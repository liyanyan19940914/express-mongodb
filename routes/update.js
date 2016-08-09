var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient ;
var DB_CONN_STR = 'mongodb://localhost:27017/test';

var updateData=function(db,callback){
    var collection=db.collection('userInfo');
    var whereStr={name:'wangmin'};
    var updateStr={$set:{age:30}};
    collection.update(whereStr,updateStr,function (err,result) {
        if(err){
            console.log('Error:'+err);
            return;
        }
        callback(result);
    });
}
MongoClient.connect(DB_CONN_STR,function (err,db) {
    console.log("连接成功!");
    updateData(db,function(result){
        console.log(result);
        db.close();
    });
});

module.exports = router;