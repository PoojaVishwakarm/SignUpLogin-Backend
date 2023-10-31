const{UserModel}=require('./../Model/UserModel');
const UserRouter=require('express').Router();



UserRouter.post("/login",async(req,res)=>{
       try {
        const {Username, Password} = req.body

    
        let User
        if(isNaN(+Username)){
          // email
          User= await UserModel.findOne({Email:Username});
        }else{
          //number
   
          User= await UserModel.findOne({ContactNumber:Username});
        }

  
        
         if(User && User.Password === Password){
         
         res.json({msg:"LogIn SuccessFully", response: true})
         }else{
          res.send("Wrong Details")
         }
         
       } catch (error) {
          res.json({ msg:error.message});
       }
})

UserRouter.post("/signup", async(req,res)=>{
      try {
        const {Firstname,Lastname,ContactNumber,Email,Password} = req.body;
        const NewUser= new UserModel({
            Firstname,
            Lastname,
            ContactNumber,
            Email,
            Password,
        });
         await NewUser.save();

         res.json({msg:"Data Post sucessfully"});
      } catch (error) {
        res.json({msg:error.message});
      }
});

module.exports= {UserRouter} ;