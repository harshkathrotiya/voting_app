const mongoose= require("mongoose");

// const bcrypt=require("bcrypt");
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:number
        
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String

    },
    aadharCardNumber:{
        type:number,
        required:true,
        unique:true
    },
    password:{
        required:true,
        type:string
    },
    role:{
        type:string,
        enum:['voter','admin'],
        default:'voter'
    },
    isVoted:{
        type:Boolean,
        default:false
    },
      
});
const user=mongoose.model('User',userSchema);
module.exports=user;