import  { input }  from '@inquirer/prompts';
import qr from 'qr-image';
import fs from 'fs';



import inquirer from 'inquirer';

inquirer
  .prompt([
    {
        message: "Type in your URL",
        name : "URL",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr.png'));

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });