var path = require('path');
var fs = require('fs');
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question(`Enter file text: `, function (content) {
    rl.question(`Enter file name: `, function (fileName) {
        fs.writeFile(
            path.join(__dirname, `/${fileName}.txt`),
            content,
            function (err) {
                if (err) {
                    console.log("There was an error");
                    return;
                }
            }
        );
        rl.close();
    });
});