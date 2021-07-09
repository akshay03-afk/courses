const express = require("express");
const path = require("path");
const courses = require("./data/courses");
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 5000;



// app.get("/", (req, res) =>{
//     console.log("Api is running");

// })

app.get("/api/courses", (req, res) =>{
    res.json(courses);
    // console.log(courses);
});

app.get("/api/courses/:id", (req, res) =>{
    
    const course = courses.find(c => c.id === req.params.id);
    
    res.json(course);
})



    app.use(express.static(path.join(__dirname, '../frontend/build')))
  
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )
  

app.listen(PORT || 5000, ()=>{
    console.log(`Server is running on port ${PORT}`)
})