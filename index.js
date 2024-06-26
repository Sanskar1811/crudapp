const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/save" , (req , res)=> {
	let url = "mongodb+srv://sanskargawade85:kc2TWw4eaUpkLf9N@cluster0.tyxftfb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" ; 
	let client = new MongoClient(url);
	let db = client.db("rsms26june24");
	let coll = db.collection("student");
	let records = {"_id" : req.body.rno , "name" : req.body.name , "marks": req.body.marks };
	coll.insertOne(records)
	.then(result => res.send(result))
	.catch(errors => res.send(errors));

})

app.get("/gs" , (req , res)=> {
	let url = "mongodb+srv://sanskargawade85:kc2TWw4eaUpkLf9N@cluster0.tyxftfb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" ; 
	let client = new MongoClient(url);
	let db = client.db("rsms26june24");
	let coll = db.collection("student");
	coll.find({}).toArray()
	.then(result => res.send(result))
	.catch(errors => res.send(errors));

})

app.delete("/rs" , (req , res)=> {
	let url = "mongodb+srv://sanskargawade85:kc2TWw4eaUpkLf9N@cluster0.tyxftfb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" ; 
	let client = new MongoClient(url);
	let db = client.db("rsms26june24");
	let coll = db.collection("student");
	let record = { "_id" :  req.body.rno };
	coll.deleteOne(record)
	.then(result => res.send(result))
	.catch(errors => res.send(errors));

})

app.put("/us" , (req , res)=> {
	let url = "mongodb+srv://sanskargawade85:kc2TWw4eaUpkLf9N@cluster0.tyxftfb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" ; 
	let client = new MongoClient(url);
	let db = client.db("rsms26june24");
	let coll = db.collection("student");
	let whom = { "_id" :  req.body.rno };
	let what = {"$set" : {"name" : req.body.name , "marks" : req.body.marks }};
	coll.updateOne(whom , what)
	.then(result => res.send(result))
	.catch(errors => res.send(errors));

})

app.listen(9000 , ()=> { console.log("Ready to serve @ 9000"); });

