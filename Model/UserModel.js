 const mongoose=require('mongoose');

 const UserSchema= mongoose.Schema({
        Firstname:{
            type:String,
            //required:[true, "Please enter your firstname"],
            required:true,
            trim:true,
        },
        Lastname:{
            type:String,
            //required:[true,"Please enter your lastname"],
            required:true,
        },
        ContactNumber:{
            type:Number,
        },
        Email:{
            type:String, 
        },
        Password:{
            type:String,
            //required:[true,"Please enter your  password"],
            required:true,
            minlength:8,
        },
       

 });

 const UserModel=mongoose.model("signUp",UserSchema);
 module.exports={UserModel};