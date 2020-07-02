const express=require("express");
const router=express.Router();
const User=require('../models/user');
const mongoose=require("mongoose");
var userdata;

// get all members page

router.get('/members',(req,res,next)=>{
if(req.cookies.logged){
    var uid=req.cookies.logged;
    var query=User.findOne({'_id':uid});
    query.select('name email money card image_url');
    query.exec((err,user)=>{
         if(err) return handleError(err);
        userdata=user;
        res.render("member",{userdata:'user',title:"members ",action:"main"});
    });
} else {
    res.redirect('/login');
}

});
router.get('/withdraw',(req,res,next)=>{
    res.render('withdraw',{action:"withdraw",userdata:userdata,title:'withdraw'})
});
router.get('/deposit',(req,res,next)=>{
    res.render("deposit",{action:"deposit",userdata:userdata,title:"deposit"})
});
router.get('/logout',(req,res,next)=>{
    res.clearCookie('logged');
    res.redirect('/login')
});
router.get('/transact',(req,res,next)=>{
    res,send('it goes here ')
});
router.post('/transact',(req,res,next)=>{
    var name=req.body.name;
    var card=req.body.card;
    var action=req.body.action;
    if(action=="DEPOSIT"){
        var newamount=parseInt(amount)+parseInt(userdata.money).toString();
        var deposit=User.update({
            'card':card
        },{
            $set:{'money':newamount}
        });
        deposit.exec((err,result)=>{
            if(err) return handleError(err)
            console.log(results);
        });
    };
    if(action=="WITHDRAW"){
        var newamount=parseInt(userdata.money)-parseInt(amount);
        if(newamount<0){res.redirect('/members'); return ;}
        var withdraw=User.update({
            'card':card
        },{
            $set:{'money':newamount}
        });
        withdraw.exec((err,results)=>{
            if(err) handleError(err)
            console.log(results);
        })
    }
    res.redirect('/members');

});
module.exports=router;