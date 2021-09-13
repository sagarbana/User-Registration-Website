const mongoose =require("mongoose");

const clientSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
    },
    phone:{
        type:Number
    },
    message:{
        type:String
    }
})

const Client=new mongoose.model('Client',clientSchema);
module.exports=Client;