const express = require("express");
const http = require("http");
const path = require('path');

const {Server} = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server)

app.use(express.static(path.resolve("./public")));


io.on('connection', (socket) => {
    console.log('a user connected');
  });
  
app.get('/', (req,res) =>{
    return res.sendFile("/public/index.html");
});
server.listen(3000, () => (console.log("server started successfully////...")));
