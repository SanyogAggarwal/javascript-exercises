const sumAll = function(num1,num2) {
    var sum = num1;
    if(num1>0 && num2>0  && Number.isInteger(num1) && Number.isInteger(num2) ){
        if(num2>=num1){
for(let i = num1 +1 ; i <= num2 ; i++ ){
    sum += i;  
}
return sum;
        }else{
            var sum2 = num2;
            for(let i = num2 +1 ; i <= num1 ; i++ ){
                sum2 += i;  
            }
            return sum2;
        } 
    }else{
        return 'ERROR';
    }
};
console.log(sumAll("7",5))
// Do not edit below this line
module.exports = sumAll;
