const express = require('express')
const db = require('./db');
db.connectDB();
const cors = require('cors');
const { ObjectId } = require('mongodb');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/courses', async( req, res) =>{
    try{
const result = await db.addCourse(req.body);
res.send(result)
    }catch(err){
        res.send(err)
    }
});

app.get('/courses', async( req, res) =>{
    try{
const result = await db.getCourse();
res.send(result)
    }catch(err){
        res.send(err)
    }
});

app.post('/courses/:course_id/reviews', async( req, res) =>{
    try{
        const courseId = ObjectId(req.params.course_id);
        const review = req.body;
        review._id = ObjectId();
const result = await db.addReview(courseId, review);
res.send(result)
    }catch(err){
        res.send(err)
    }
});

app.get('/courses/:course_id/', async( req, res) =>{
    try{
        const courseId = ObjectId(req.params.course_id);
        
const result = await db.getCourseId(courseId);
res.send(result)
    }catch(err){
        res.send(err)
    }
});





app.listen(3001, console.log("Listen on a port 3001"));