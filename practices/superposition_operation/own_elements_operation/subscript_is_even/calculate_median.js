'use strict';
var calculate_median = function(collection){

  let evenNum = [];

  for (let i = 0; i < collection.length; i++) {

    if((i + 1) % 2 === 0){
      evenNum.push(collection[i]);
    }

  }

  if(evenNum.length % 2 != 0){
    return evenNum[Math.floor(evenNum.length / 2)];
  }
  else {
    return (evenNum[evenNum.length / 2 - 1] + evenNum[evenNum.length / 2]) / 2;
  }
};
module.exports = calculate_median;
