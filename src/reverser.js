//reverser.js - Reverse the order of words in a sentence
function reverse(stringToReverse){
    var changedArray = stringToReverse.split(" ");
    var stringToReturn = ""
    for(var i = changedArray.length; i > 0; i--){
        stringToReturn += changedArray[i-1] + " ";
    }
    return stringToReturn;
}
module.exports.reverse = reverse;