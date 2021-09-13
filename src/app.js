const express =require("express");
const path=require("path");
const app=express();
const port=process.env.PORT || 3000;
require("./db/conn");
const Client=require("./models/client");

//const static_path= path.join(__dirname,"../public");
console.log(__dirname);

const static_path= path.join(__dirname,"../public");
app.use(express.static(static_path));
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res) => {
    res.send("Hello from app.get side ");
})

app.post("/register", async(req,res) => {
    try {
        const createDoc=new Client({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            message:req.body.message
        })
        const result = await createDoc.save();
        console.log(result);
        
        res.redirect('/');
        //res.status(201).send(`We will Contact you , Details Submitted : ${result}`);

    } catch (error) {
        console.log("Not stored from app.post / register");
        res.status(400).send(error);
    }
    //console.log(req.body.email);
    //res.send(req.body.email);
})

app.listen(port,()=>{
    console.log(`Listening on the port : ${port}`);
})