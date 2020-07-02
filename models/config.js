
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/Bankapp",{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(!err){
        console.log("connection established successfully");
    }
    else if(err){
        console.log(JSON.stringify(err));
    }
});
require('./user');