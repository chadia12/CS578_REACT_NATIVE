
const express = require("express");
const { fork } = require("child_process");

const app = express();
app.use(express.json());

app.get("/lucas", (req, res) => {
  
  if (req.query.n >= 0) {
    const childProcess = fork("./childprocess.js");
  childProcess.send(req.query.n);
    childProcess.on("message", (lucas) => {
      res.end(lucas);
    });
  } else {
    res.end("lucas must be a number");
  }
});


app.listen(3000, console.log("Listen on a port 3000"));