
"use strict";

var str = {
  string : 'default',
  charAt(index){
     return this.string[index];
  }
}
str.string = 'SOme value';
console.log(str.charAt(1));

// recurrsion 

function factorial(num) {
    var nextNum = num - 1;
    // Base case
    if (num === 1) {
        return num; // return 1;
    }
    return num * factorial(nextNum);
}

console.log(factorial(5));
//zcxc

