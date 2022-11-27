// const {workerData, parentPort} = require('worker_threads');

// const data ={ ...workerData, address: "1000 N 4th st"};
// parentPort.postMessage(data);


const {workerData, parentPort} = require('worker_threads');
const {num} = workerData;

const lucas = (num) => {
    if (num == 0){
        return 2;
    } else if(num == 1){
        return 1;
    }
    return lucas (num - 1) + lucas(num-2);
};

const lucNum = lucas(num);
parentPort.postMessage({lucas : lucNum});