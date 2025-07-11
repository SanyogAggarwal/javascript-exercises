const fibonacci = function(input) {
    let num = Number(input)
    if (num < 0) {
    return "OOPS"
}else if(num == 0 ){
    return 0
}else if (num == 1 || num == 2){
    return 1

}else{
    let num1 = 1
    let num2 = 1
    for (let i = 3; i <= num ; i++) {
        let sum = num1 + num2
        num1 = num2
        num2 = sum
    }
return num2
}


};

// Do not edit below this line
module.exports = fibonacci;
