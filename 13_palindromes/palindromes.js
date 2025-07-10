const palindromes = function (input) {
    let oriString = input.toLowerCase().replaceAll(/[^a-z0-9]/g , "")
    let reverseString = oriString.split("").reverse().join("")
  
    return oriString == reverseString
};

// Do not edit below this line
module.exports = palindromes;
