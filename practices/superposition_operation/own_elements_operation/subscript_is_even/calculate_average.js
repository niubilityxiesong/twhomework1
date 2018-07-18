'use strict';
var calculate_average = function(collection){
  let sum = 0;
  let countNum = 0

  for (let i = 0; i < collection.length; i++) {

    if((i + 1) % 2 === 0){
      sum += collection[i];
      countNum++;
    }

  }

  return Math.floor(sum / countNum);
};
module.exports = calculate_average;
