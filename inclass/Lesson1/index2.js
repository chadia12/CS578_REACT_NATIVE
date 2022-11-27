// const crypto = require ('crypto');
// conststart_time = Date.now();
// crypto.pbkdf2("A", "B", 100000, 512, 'sha512', () => {
// console.log(`1. ${Date.now() -start_time}`);
// })
// crypto.pbkdf2("A", "B", 100000, 512, 'sha512', () => {
// console.log(`2. ${Date.now() -start_time}`);
// })
// crypto.pbkdf2("A", "B", 100000, 512, 'sha512', () => {
// console.log(`3. ${Date.now() -start_time}`);
// })

// const { Http2ServerResponse } = require('http2');
// const https = require('https');
// const helper = () =>{
//     https.request('https://google.com', (res) =>{
//         res.on('data', () =>{});
//         res.on('end', () => console.log(`time: ${Date.now() - startTime}`))
//     }).end();
// }
const path = require('path');
const fs = require('fs');
fs.readFile(path.join(__dirname, 'hello.txt'), 'utf8', function(err, data) {
setTimeout(() => { console.log('timeout'); });
setImmediate(() => { console.log('immediate'); });
process.nextTick(()=> console.log('nexttick'));
});

    
    