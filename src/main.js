//Use reverser on any file
const reverser = require('./reverser');
var fileToTest = '';

if(process.argv.length != 3){
    console.log('Expected usage: node main.js anyInputFileName');
    console.log("Example: node main.js text/smallSet.txt");
    process.exit(0);
}else{
    fileToTest = process.argv[2];
    console.log(`Reversing all lines of text in ${fileToTest}`);
};

function loadTheFile(fileName){
    //load the file
    let fs = require('fs');
    var rawdata = fs.readFileSync(fileName);
    
    var linesOfFile = rawdata.toString().split("\n"); //Convert to an array of strings
    return linesOfFile;
};

var linesOfFile = loadTheFile(fileToTest);

for(var i = 1; i <= linesOfFile[0];i++){
    let reversedLine = reverser.reverse(linesOfFile[i]);
    console.log(`Case#${i}: ${reversedLine}`);
}


