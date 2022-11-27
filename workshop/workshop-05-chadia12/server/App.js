const express = require("express");
const db = require("./db");
db.connectDB();
const cors = require("cors");


const app = express();

app.use(cors());
app.use(express.json());

// POST /departments
app.post("/departments", async (req, res) => {
  try {
    const result = await db.addDepartment(req.body);
    res.json(result);
  } catch (err) {
    res.send(err);
  }
});

//POST /departments/:department_code/courses

app.put("/departments/:department_code/courses", async (req, res) => {
  try {
    const result = await db.addCourse(req.params.department_code, req.body);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

//GET /departments/:department_code/courses
app.get("/departments/:department_code/courses", async (req, res) => {
  try {
    const result = await db.getAllcourses(req.params.department_code);
    res.send(result.courses);
  } catch (err) {
    res.send(err);
  }
});

//PUT /departments/:department_code/courses/:course_code
app.put(
  "/departments/:department_code/courses/:course_code",
  async (req, res) => {
    try {
      const name = req.body;
      const result = await db.updateCourse(
        req.params.department_code,
        req.params.course_code,
        name.title
      );
      res.json(result);
    } catch (err) {
      res.send(err);
    }
  }
);

//DELETE /departments/:department_code/courses/:course_code

app.delete(
  "/departments/:department_code/courses/:course_code",
  async (req, res) => {
    try {
      const result = await db.deleteCourse(
        req.params.department_code,
        req.params.course_code
      );
      res.send(result);
    } catch (err) {
      res.send(err);
    }
  }
);

app.listen(3000, console.log("Listen on a port 3000"));
