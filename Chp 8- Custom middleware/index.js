import morgan  from "morgan";
import express from "express";

const app = express();

app.use(morgan("tiny"));
function logger(req,res,next){
    console.log("Request Method: ", req.method);
    console.log("Request URL: ", req.url);
    next();
}

app.use(logger);

app.get("/", (req,res) =>{
    res.send("hello");
})

app.listen(3000, () =>{
    console.log('listening on port 3000');
})
