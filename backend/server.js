const express = require("express");
const courses = require("./data/courses")

const app = express();

const PORT = 5000;



app.get("/", (req, res) =>{
    console.log("Api is running");

})

app.get("/api/courses", (req, res) =>{
    res.json(courses);
    // console.log(courses);
});

app.get("/api/courses/:id", (req, res) =>{
    const course = courses.find(c => c.id === req.params.id);
    res.json(course);
})

app.listen(PORT || 5000, ()=>{
    console.log(`Server is running on port ${PORT}`)
})