
const repeatString = function(string,num) {
    
    if(num>=0){
        var Newstring = "";
    for(let i = 1 ; i <= num ; ++i ){
     Newstring += string;
     
    }
}else{
   return 'ERROR';
}
return Newstring;  
};
console.log(repeatString("hey",3));
 
// Do not edit below this line
module.exports = repeatString;
