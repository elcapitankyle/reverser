//Test the functionality of reverser.js
const expect = require('chai').expect,
reverser = require('../src/reverser');

describe('reverser', () => {
    it('should reverse a line of words', () => {
        var result = reverser.reverse('This is a string');
        console.log(`Simple test: ${result}`);
        expect(result).to.not.equal('This is a string', 'The line did not get reversed');
    });
    it('should reverse 5 lines with up to 25 words each', () => {
        var linesOfFile = loadTheFile('textFiles/smallSet.txt');

        for(var i = 1; i <= linesOfFile[0];i++){
            let reversedLine = reverser.reverse(linesOfFile[i]);
            console.log(`Case#${i}: ${reversedLine}`);
            
            expect(reversedLine).to.not.equal(linesOfFile[i], 'A line was equal but it should not have been');    
        }
    });
    it('should reverse 100 lines with up to 1000 words each', () => {
        var linesOfFile = loadTheFile('~/largeSet.txt');

        for(var i = 1; i <= linesOfFile[0];i++){
            let reversedLine = reverser.reverse(linesOfFile[i]);
            console.log(`Case#${i} reversed: ${reversedLine}`);
            
            expect(reversedLine).to.not.equal(linesOfFile[i], 'A line was equal but it should not have been');    
        }
    });
    it('should not puke on bad data', () => {
        var linesOfFile = loadTheFile('textFiles/badSet.txt');

        for(var i = 1; i <= linesOfFile[0];i++){
            let reversedLine = reverser.reverse(linesOfFile[i]);
            console.log(`Case#${i} reversed: ${reversedLine}`);
            
            expect(reversedLine).to.not.equal(linesOfFile[i], 'A line was equal but it should not have been');    
        }
    });
});

function loadTheFile(fileName){
    //load the file
    console.log(`Reading input file ${fileName}`);
    let fs = require('fs');
    var rawdata = fs.readFileSync(fileName);
    
    var linesOfFile = rawdata.toString().split("\n"); //Convert to an array of strings
    return linesOfFile;
};