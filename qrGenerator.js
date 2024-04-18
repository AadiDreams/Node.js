import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([{
    message: "Enter the url",
    name:"URL"
  }])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr.png'));

    fs.writeFile("url.txt", url, (err) => {
        if (err) throw err;
        console.log("qr code is generated and saved!");
    })
  });
