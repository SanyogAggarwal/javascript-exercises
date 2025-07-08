
const repeatString = function(string,num) {
    
    if(num>=0){
        let newstring = "";
    for(let i = 1 ; i <= num ; ++i ){
     newstring += string;
     }
     return newstring;
}else{
   return 'ERROR';
}  
};
console.log(repeatString("hey",3));
 
// Do not edit below this line
module.exports = repeatString;
