//Use reverser on any file
const reverser = require('./reverser');
var fileToTest = '';

function loadTheFile(fileName){
    let fs = require('fs');
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
    
    if(isNaN(+linesOfFile[0])){
        console.log("Missing a number as the first line of the file. Please add a number as the first line of the file representing the number of lines that follow. Exiting now with status 'very disappointed in your trickery.")
        process.exit(0);
    }else{
        for(var i = 1; i <= linesOfFile[0];i++){
            let reversedLine = reverser.reverse(linesOfFile[i]);
            console.log(`Case#${i}: ${reversedLine}`);
        }
    }
    
};





