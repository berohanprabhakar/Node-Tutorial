const express = require('express');
const path = require('path');

const PORT = 3000;
const app = express();

// viewport
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get('/', (req, res) =>{
    res.render("home");
})


app.listen(PORT, () => console.log("Server Started"));