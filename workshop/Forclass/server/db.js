const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017/courseDB';

const mongo = new MongoClient(url);
let db;

exports.connectDB = async () => {
    try{
        const client = await mongo.connect()
            console.log("DB is connected");
            db= client.db('courseDB')
        }catch(err){
            console.log("DB is not connected");
        }
    };

    exports.addCourse = (course) => {
return new Promise ( (resolve, reject) =>{
    db.collection('course').insertOne(course)
.then((res) => resolve(res))
.catch ((err) => reject(err));
});

    };
    exports.getCourse =() =>{
        return new Promise ( (resolve, reject) =>{
            db.collection('course').find().toArray()
        .then((res) => resolve(res))
        .catch ((err) => reject(err));
        }) 
    }

    exports.addReview = (course_id, review) =>{
        return new Promise ( (resolve, reject) =>{
            db.collection('course').updateOne({_id: course_id}, {$push:{reviews: review}})
        .then((res) => resolve(res))
        .catch ((err) => reject(err));
        });  
    }
    exports.getCourseId = (course_id) =>{
        return new Promise ( (resolve, reject) =>{
            db.collection('course').find({course_id})
        .then((res) => resolve(res))
        .catch ((err) => reject(err));
        })
    }

   