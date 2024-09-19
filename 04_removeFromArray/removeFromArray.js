const removeFromArray = function(Arrray , ...num) {
    for(const input of num){
    while(Arrray.indexOf(input) !== -1){
    var RemoveElement = Arrray.splice(Arrray.indexOf(input) , 1)
    }
}
return Arrray;
};
console.log(removeFromArray([1,2,2,4,5] ,2 ))
// Do not edit below this line
module.exports = removeFromArray;

// test 3 were we want to remove dublicate elements was diffucult