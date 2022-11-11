const mongoose = require('mongoose');

const express = require('express');

const app = express();

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
 
const router=require("./router/route")

const link = "mongodb+srv://nakimerairene:pNKPcmaG2wdSFk7G@codequeen7.q82advt.mongodb.net/?retryWrites=true&w=majority"


const port =8080;
app.use(express.json())

app.use('/',router)

mongoose.connect(link,()=>{//connects to the data

    app.listen(port,()=>{
        console.log(`server is running ${port}`);
    })
}).catch(error=>console.log(error));
