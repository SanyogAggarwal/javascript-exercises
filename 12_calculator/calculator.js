const add = function(...nums) {
 
  let sum = nums.reduce((accu , current) => {
    return accu + current
  }, 0) 

  return sum

};

const subtract = function(...nums) {
  if (nums.length == 0) {
    return 0
  }else{
	let subNum = nums.reduce((accu , current) => {
    return accu - current
  })
  return subNum
}
};

const sum = function(nums) {
  let total = nums.reduce((accu , current) => {
    return accu + current
  },0)
  return total;
};

const multiply = function(nums) {
  
  let muti = nums.reduce((accu , current ) => {
  return accu*current
 },1)

 return muti
  
};

const power = function(num , power) {
	return num**power
};

const factorial = function(num) {
  let facto = 1;
	for (let index = num; index > 0; index--) {
    facto *= index
  }
  return facto
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
