const http = require("http");

// this is the scrach code for makeing the server
const myserver = http.createServer((req,res) =>{
    console.log('hello');
    res.end("Hello motherfucker");
});


myserver.listen(8000,() => {
    console.log("Server is running bom... at :",'http://localhost:8000');
});
