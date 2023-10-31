const express= require('express');
const { connection } = require('./Database/connectionDB');
const{UserRouter}=require("./Router/UserRouter");


require('dotenv').config();
const port=process.env.PORT||'3000';
const app=express();

app.use(express.json());

app.use('/api',UserRouter);



app.listen(port,async()=>{
    try {
        await connection();
        console.log(" Data base connected sucessfully");
        
    } catch (error) {
        console.log(error);
        
    };
    console.log(` server rinnning on ${port}`);
});

