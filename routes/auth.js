const express=require("express");
const router=express.Router();
const User=require("../models/user");
const mongoose =require("mongoose");

// get Log in 
router.get("/",(req,res)=>{
    if(req.cookies.logged){
        res.redirect("/members")
    } else {
        res.redirect("login",{title:"login"})
    }
});
// regestration process
router.post('/',(req,res)=>{
    var email=req.body.email;
    var pass=req.body.password;
    var query=User.findOne({'email':email,'password':pass});
     query.select('id  email pass');
    query.exec((err,user)=>{
        if(err) return handleError(err);
        req.cookies('logged',userid);
        res.redirect('/members');
    })
});
module.exports=router;