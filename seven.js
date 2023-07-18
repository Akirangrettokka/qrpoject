import inquirer from "../7/node_modules/inquirer/lib/inquirer.js";
import qr from "qr-image";
import * as fs from 'node:fs';

const varName = [{
    type: "input",
    name: 'link',
    message: "Pls, paste your link here:"
}];

inquirer.prompt(varName).then((answers) => {
    var qrpng = qr.image(JSON.stringify(answers.link, null, '  '));
    qrpng.pipe(fs.createWriteStream('qr.png'));

    fs.writeFile('message.txt', answers.link , (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

});
