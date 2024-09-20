const convertToCelsius = function(temp) {
  if(temp === "") {
    return 0;
  } else {
    let Newtemp = (temp - 32)*5/9;
  return Math.round(Newtemp*10)/10;
  }
};

const convertToFahrenheit = function(Temp) {
  if(Temp === "") return 0 ;
  let NewTemp = (Temp * 9/5) + 32 ;
  return Math.round(NewTemp*10)/10;
};

console.log(convertToCelsius(100))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
// npm test ./tempConversion.spec.js