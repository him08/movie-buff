const express=require('express');
const app=express();
const mongoose = require('mongoose');
const Movie = require("./models/movie");
app.use(express.json());
mongoose.connect("mongodb+srv://himanshi:qwerty123@movie-buff.kfqlpsp.mongodb.net/Movie-Buff")
.then(()=>{
 console.log("Database connected");
})
.catch((err)=>{
 console.log("Database connection failed",err);
})

app.get('/api/movies',async (req,res)=>{
 const query = req.query.q;
 if(query){
  const movies  = await Movie.find({ $text: { $search: query } });
  res.json(movies);
 }
 else{
  res.status(400).json({message: "query not present"})
 }
 
});

app.listen(5000,()=>{
 console.log("server started");
});

