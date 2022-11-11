const express = require('express');
const todoSchema = require('../models/todoScheme');
const router = express.Router();

router.post("/todos", async(req,res)=>{
    const todo = req.body//requests to be saved in todo
    const todoData = new todoSchema(todo)//our data to be saved in a schema format
    try{
        await todoData.save()//incase it doesnt save immediately wait to save
        return res.status(200).send(todoData)
    }catch(error){
        res.status(401).send(error)
    }

   

})
module.exports =router;