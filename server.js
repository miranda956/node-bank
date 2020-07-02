const express=require("express");
const bodyparser=require("body-parser");
const cookieparser=require("cookie-parser");
const path =require('path');
const methodoverride=require("method-override");
const logger=require("morgan");
const session=require("express-session");
const favicon=require("serve-favicon");
const debug=require("debug");
const ejs =require("ejs");
const redirect =require("express-redirect");
const PORT=process.env.port||3030;
require("./models/config");
require('./routes/api');
require('./routes/auth');
require('./routes/index');
require('./routes/members');
require('./routes/regester');

const app=express();

app.use(session({
    secret:"12345",
    resave:true,
    saveUninitialized:true
}));
app.use(cookieparser());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(logger("dev"));
app.use(methodoverride("_method"));
//app.use(favicon(path.join(__dirname,'public','favicon.ico')));
// need to be downloaded
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));
app.listen(PORT,function(err){
    if(!err){
        console.log(`application listening on a websocket ${PORT}`);
    }
    else if(err){
        console.log(JSON.stringify(err));
    }

});