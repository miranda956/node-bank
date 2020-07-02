var mongoose=require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({

        name:{
            type:String,
            unique:true,
            required:true
        },
        email:{
            type:String,
            unique:true,
            required:true
        },
        password:{
            type:String,
            unique:true,
            required:true,
            len:[8,15]
        },
        money:{
            type:Number,
            required:true,
            default:0
        },
        card:{
            type:String,
            unique:true,
            required:true

        },
        image_url:{
            type:String,
            unique:true,
            required:true
        },
        created_Date:{
            type:Date,
            default:Date.now()
        }

});
// Compile model from schema
var User =module.exports= mongoose.model('User', userSchema); 
