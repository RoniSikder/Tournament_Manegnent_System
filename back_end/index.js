const express = require("express");
const mongo = require("mongoose");
const cors= require("cors")
// const axios = require("axios")
const app=express();
const port = 8000;
app.use(cors())
app.use(express.json())
// install "cors" to work done

let url="mongodb+srv://ronisikder:6291785756@cluster0.vs57g.mongodb.net/Match_Details?retryWrites=true&w=majority"

mongo.connect(url,{useNewUrlParser: true},(err,res)=>{
    if(res){
        console.log('DataBase Connection Successfull');
    }
    else{
        console.log('Opps!..Error Heppend');
    }
})

let scha=new mongo.Schema({
    nam:String,
    des:String,
    id:String,
    date:String
    // matchs:{
    //     college:String,
    //     points:Number
    // }
})

let hold = new mongo.model("match",scha);

app.post('/register',(req,res)=>{
    const {nam,des,id,date}=req.body
    let demo = new hold({
        nam,
        des,
        id,
        date
    })
    demo.save((err)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send({message:"successfully added"})
        }
    })
})

app.get('/view',(req,res)=>{
    hold.find({},(err,data)=>{
        if(err){
            res.send(err)
        }
        else{
            res.json(data)
        }
    })
})

app.get('/',(req,res)=>{
    res.send("fuck world")
})

app.listen(port,(res)=>{
    if(res){
        console.log("Someting Error Occurs")
    }
    else{
        console.log("Server Started at Port "+port)
    }
})