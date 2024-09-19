const reverseString = function(Input) {
    var MyArray = Input.split("");
    const RevArray = MyArray.reverse();
    const finalString = RevArray.join("");
    return finalString;
};

console.log(reverseString("hello"))

// Do not edit below this line
module.exports = reverseString;
