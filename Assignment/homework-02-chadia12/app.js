const express = require("express");
// const middleWare = require("./middlewareFc");
const db = require('./db');
db.connectDB();

const cors = require("cors");
const { ObjectId } = require("mongodb");

const app = express();

app.use(cors());
app.use(express.json());
// app.get("/schools", middleWare.getAll);
// app.put("/teachers", middleWare.addTeacher);
// app.put("/schools/teachers/:id", middleWare.updateTeacher);
// app.delete("/schools/:id", middleWare.addTeacher);
// app.put("/schools/students", middleWare.addStudent);

// app.put("/schools/students/:courseId/:studentId", middleWare.updateStudent);

// app.put(
//   "/schools/courses/students/:courseId/:studentId",
//   middleWare.deleteStudent
// );
app.post('/schools', async (req, res) =>{
  try{
const result = await db.addTeacher(req.body);
res.send(result)
  }catch(err){
    res.send(err);
  }
})
app.put('/schools/:school_id/teachers', async(req, res) =>{
  try{
    const schoolId = ObjectId(req.params.school_id);
    const teacher = req.body;
    teacher._id = ObjectId();
const result = await db.updateTeacher(schoolId, teacher)
res.json(result);
  }catch(err){
    res.send(err);
  }
})

app.listen(3001, console.log("Listen on a port 3001"));
