const fs = require("fs");




// async function writing(message){
//    await fs.writeFile("messsge.txt", message, (err) => {
//         if(err) throw err;
//         console.log("Fill has been saved successfully");
//     });
// }

 function reading(){
  fs.readFile("./messsge.txt", 'utf8', (err, data) => {
        if(err) throw err;
        console.log(data);
    });
};

// for(i = 0; i <= 5; i++){
//     writing("you are an idiot" + i);    
// }

reading();
