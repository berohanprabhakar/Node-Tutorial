const fs = require('fs');
// fs module is built in module to interact with file system

// syncronous file return's the output while async doesn't return and want call back to print
fs.writeFileSync('./test.txt',"{PIYUSH GARG :+9133233232, ROHAN PRABHAKAR : 849348334}");


// example

// sync file
const result = fs.readFileSync('./test.txt', 'utf-8');
console.log(result);

// async file i need to write call back function also to get the result out of it
fs.readFile('./test.txt', 'utf-8', (err, result) => {
    if(err) console.log("Error",err);
    else{
        console.log(result);
    }
})


// append file data
fs.appendFileSync('./test.txt', "Rohan Prabhakar : 23232322\n");
fs.appendFileSync('./test.txt', "Rohan Prabhakar : 23232322\n");
fs.appendFileSync('./test.txt', "Rohan Prabhakar : 23232322");

console.log(result);


// // print the os cores of my system
// const os = require("os");
// console.log(os.cpus().length);