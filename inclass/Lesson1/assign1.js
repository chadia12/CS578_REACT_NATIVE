const express = require('express');
const app = express();

app.use(express.json());

app.get('/lucas', (req, res) =>{
    
    if(req.query.n >= 0){
        const result = lucas(req.query.n);
return res.send(`output: ${result}`);
    }
    else{
     return res.send("lucas must be a number")
    }
   
})


app.listen(3000, console.log("Listen on a port 3000"));

function lucas( n){
    if(n == 0){
        return 2;
    }
    else if( n == 1){
        return 1;
    }
    return lucas( n - 1) + lucas( n - 2);
}