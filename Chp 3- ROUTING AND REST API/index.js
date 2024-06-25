const express = require('express');
const users = require('./MOCK_DATA.json');

const fs = require('fs');
const app = express();
const PORT = 3000;
// routes

app.get("/api/users", (req,res) =>{
    return res.json(users);
})

app.route("/api/users/:id")
.get((req,res) =>{

    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    
    if(user != -1){
    return res.json(user);
    }
    else{
        res.status(404).send({message:'User not found...'});
    }

})
.put((req,res) =>{

})
.delete((req,res) =>{
    const id = Number(req.params.id);
    let useridx =  users.findIndex((user) => user.id === id);
    if(useridx != -1){
    users.splice(useridx,1);
        res.status(200).send({message: 'User with id ${useridx} deleted successfully...'});
    }
    else{
        res.status(404).send({message:'User Not found..'});
    }
});



// middleware
app.use(express.urlencoded({ extended : false}));


app.post("/api/users", (req,res) =>{
    const body = req.body;
    //  we have to use middleware url encoded for putting form data into body
    // console.log(body)
    users.push({...body, id : users.length + 1} );
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err,data) => {
        return res.json(body); 
    })

    
})

app.listen(PORT, () => { console.log("Server started at:", PORT)});