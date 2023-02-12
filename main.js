var express = require("express");
var app = express();
var path = require("path");
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
const { response } = require("express");
var port = process.env.port||5000;
var db = require("./config/database.js");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json());

// Allow access to the defect tracker folder
app.use(express.static(__dirname+'/dts'));

mongoose.connect(db.mongoURI,{
    useNewURLParser:true
}).then(function(){
    console.log("connected to MongoDB Database");
}).catch(function(err){
    console.log(err);
});

// Set the schema for the database
require("./config/defectTrackerSchema.js");
var DefectList = mongoose.model("defectList");

// Main route
app.get("/", function(req, res){
    res.redirect('newBug.html');
});

app.get("/getDefectList", function(req,res){
    DefectList.find({}).then(function(index){
        res.json({index});
    });
});

app.get("/addBugPage", function(req,res){
    console.log("add a new bug?");
})

app.get("/deleteDefect", function(req,res){
    console.log("Delete requested.");
})

app.listen(port, function(){
    console.log(`Running on port ${port}.`);
})