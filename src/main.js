//Check arguments
if(process.argv.length < 3){
    console.log("Expected usage: node main.js fileWithInputs.txt");
    process.exit(1);
};

const reverser = require('./reverser.js'),
fileName = process.argv[2];

console.log("Reading input file");
let fs = require('fs');
var rawdata = fs.readFileSync(fileName);

var linesOfFile = rawdata.toString().split("\n"); //Convert to an array of strings

//Process each line of the input file
for(var i = 1; i <= linesOfFile[0];i++){
    console.log(`Case#${i} forward: ${linesOfFile[i]}`);
    let reversedLine = reverser.reverse(linesOfFile[i]);
    console.log(`Case#${i} backward: ${reversedLine}`);    
}
