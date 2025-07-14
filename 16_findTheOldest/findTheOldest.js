const findTheOldest = function(input) {
let result = input.reduce((accu , curent) => {
  
  if (!("yearOfDeath" in accu)) {
         accu.yearOfDeath = new Date().getFullYear()
}

 if (!("yearOfDeath" in curent)) {
    curent.yearOfDeath = new Date().getFullYear()
 }

 let age1 = accu.yearOfDeath - accu.yearOfBirth  
 let age2 = curent.yearOfDeath - curent.yearOfBirth

 return age1 > age2 ? accu : curent
})

return result
}

// Do not edit below this line
module.exports = findTheOldest;
