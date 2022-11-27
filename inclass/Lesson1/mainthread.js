// const { Worker } = require('worker_threads');
// const worker = new Worker('./workerthread.js', { workerData: { name: 'chadia' } });
// worker.on('message', data => { console.log(data); });


const express = require('express');
const app = express();
const {Worker} = require('worker_threads');

app.get('/lucas', (req, res) =>{
    const n = Number (req.query.n);
    if(n >= 0){
        const lucasOff = new Worker('./workerthread.js',{workerData: {num: n}});
        lucasOff.on('message', data =>{
res.json(data)
        });
    }else{
        res.send('n has to be a positive number')
    }
})

app.listen(3001, () =>{
    console.log('listen on port 3001');
})


