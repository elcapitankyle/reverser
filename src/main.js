//Use reverser on any file
const reverser = require('./reverser'),
fs = require('fs');
var fileToTest = '';

function loadTheFile(fileName){
    //load the file
    //let fs = require('fs');
    console.log('Starting loadTheFile');
    var rawdata = fs.readFileSync(fileName);
    var linesOfFile = rawdata.toString().split("\n"); //Convert to an array of strings
    return linesOfFile;
};

if(process.argv.length != 3){
    console.log('Expected usage: node main.js anyInputFileName');
    console.log("Example: node main.js text/smallSet.txt");
    process.exit(0);
}else{
    fileToTest = process.argv[2];
    console.log(`Reversing all lines of text in ${fileToTest}`);
    
    var linesOfFile = loadTheFile(fileToTest);
    
    console.log('File contents: ' + linesOfFile);
    for(var i = 1; i <= linesOfFile[0];i++){
        let reversedLine = reverser.reverse(linesOfFile[i]);
        console.log(`Case#${i}: ${reversedLine}`);
    }
};





