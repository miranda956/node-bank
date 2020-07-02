const express=require("express");
const router=express.Router();
const User=require("../models/user");
const mongoose=require("mongoose");
router.get('/',(req,res)=>{
    res.render('/API',{title:'api'})
});
//get all users
router.get('/users',(req,res,next)=>{
    var query=User.find();
    query.select('name card money');
    query.exec((err,user)=>{
        if (err) return handleError(err);
        res.json(User)
    });
});
// get a specific user by card
router.get('/users:/card',(req,res,next)=>{
    var query=User.findOne({'card':req.params.card});
    query.select(' name card money ');
    query.exec((err,user)=>{
        if(err) return handleError(err);
        res.json(user)
    });
});
module.exports=router;
