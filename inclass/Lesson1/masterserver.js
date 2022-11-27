const cluster = require('cluster');
const os = require('os');

if(cluster.isMaster){
    const cpus = os.cpus().length;
    for( let i= 0; i < cpus; i++){
        cluster.fork();
    }
    
}else{
    require(`./workerserver.js`);  
}
