const fs = require("fs");
fs.writeFile("msg.txt","hello!", (err) => {
    if (err) throw err;
    console.log("successfull");
});
