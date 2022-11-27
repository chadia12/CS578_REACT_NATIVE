const http = require('http');

http.createServer((req, res) =>{
 res.end(`Pid: ${process.pid}`)
}).listen(3000, console.log(`listen on 3000 port, pid ${process.pid}` ))

