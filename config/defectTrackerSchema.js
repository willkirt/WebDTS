var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Schema = new Schema({
    BugID:{
        type:String,
        required:true
    },
    Project:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    OperatingSystem:{
        type:String,
        required:true
    },
    BugType:{
        type:String,
        required:true
    },
    Priority:{
        type:String,
        required:true
    },
    Status:{
        type:String,
        required:true
    },
    AssignedTo:{
        type:String,
        required:false
    }
});

mongoose.model("defectList", Schema);