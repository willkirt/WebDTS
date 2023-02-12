var express = require("express");
var app = express();
var path = require("path");
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
const { response } = require("express");
var port = process.env.port||3000;
var db = require("./config/database");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(__dirname+"/dts"));

mongoose.connect(db.mongoURI,{
    useNewURLParser:true
}).then(function(){
    console.log("connected to MongoDB Database");
}).catch(function(err){
    console.log(err);
});

// MAIN ROUTE
app.get("/", function(req, res){
    res.send("No");
})
app.listen(port, function(){
    console.log(`Running on port ${port}`);
});