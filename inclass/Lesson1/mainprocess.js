const http = require("http");
const { fork } = require("child_process");

const server = http.createServer();

server.on("request", (req, res) => {
  const childProcess = fork('./childprocess.js');
  childProcess.send("hello");
  childProcess.on("message", (sum) => {
    res.end(`Main Pid: ${process.pid}: Pid: ${childProcess.pid}: sum = ${sum}`);
  });
});
server.listen(3000);
