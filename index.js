const express = require("express");
// import your mongoose
const mongoose = require("mongoose");
// install your mongoose

const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// create a studentSchema with name, grade, advisory, and fav subject
const studentSchema = new mongoose.Schema({
  name:{type:String, required :true},
  grade:{type: Number, default: 9},
  favsub:{type: String }
})
// connect your schema to a model called Student

// create a route hanlder for /g12 that returns every student in grade 12
const Student= mongoose.model("student", studentSchema)
// (OYO) create a route hanlder for /me that returns yourself without using your name in the query

// (OYO) create a route hanlder for /friend that returns someone at your table using their name in the query

// Write an async function called startServer
// inside make sure to connect to mongoose w/ your SRV string
// (make sure your call you name your database myClass!)
// Save a document to mongoDB about yourself 
// (OYO) save 2 more documents about students at your table
// make sure to start your server 

async function startsever(){
  await mongoose.connect("mongodb+srv://SE12:CSH2025@cluster0.2yqbx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  
  const user1 = await new Student({
    name: "zyaire",
    grade:12,
    favSub:"cs",
   }).save()
   

  const user2 = await new Student({
    name: "jayson",
    grade:12,
    favSub:"cs",
   }).save()

   app.listen(3000, () => {
    console.log(`Server running`);
  });
   

}
// call startServer
startsever();
// if you finished all the excersizes try these 
 