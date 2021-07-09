const express = require("express");
const path = require("path");
const courses = require("./data/courses")

const app = express();

const PORT = 5000;



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

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))
  
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )
  } else {
    app.get('/', (req, res) => {
      res.send('API is running....')
    })
  }

app.listen(PORT || 5000, ()=>{
    console.log(`Server is running on port ${PORT}`)
})