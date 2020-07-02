const express=require('express');
const router=express.Router();
const User=require("../models/user");
const mongoose=require("mongoose");
 // get regester page 
 router.get('/',(req,res)=>{
     if(req.cookies.logged){
         res.redirect('/members')
     } else {
         res.render("regester",{title:'regester'});
     }
 });

 //
 router.post('/',(req,res)=>{
    var user=new User({
        name:req.body.name,
        card:req.body.card,
        email:req.body.email,
        password:req.body.password
    });
    user.save();
    res.render('login',{title:'login'});
 });
 module.exports=router;