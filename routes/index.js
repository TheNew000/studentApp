var express = require('express');
var router = express.Router();

var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var mongoURL = 'mongodb://localhost:27017/students';
var db;  //Global variable so all of our routes have access to the db connection

var studentsInClass = [
    'Paige',
    'Eric',
    'JT',
    'David',
    'Danny',
    'Jackson',
    'Summer',
    'Shirlette',
    'Dan',
    'Alex',
    'Danielle',
    'Brett'
];

mongoClient.connect(mongoURL, function(error, database){
    if(error){
        console.log(error);
    }else{
        db = database;
        console.log('Connected to Mongo Successfully!');
    }
});



/* GET home page. */
router.get('/students', function(req, res, next) {
  db.collection('class').find().toArray(function(error, classResult){

    });
  var studentNumber = req.query.student;
  if(studentNumber)
  res.render('students', {
    students: studentsInClass,
    whoToHighlight: studentNumber

    });

});

router.get('/', function(req, res, next){
    res.render('index', {title: 'Express'});
});

module.exports = router;
