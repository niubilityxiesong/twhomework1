'use strict';
var even_group_calculate_average = function(collection){

  let even1Num = [];
  let even10Num = [];
  let even100Num = [];


  for (let i = 0; i < collection.length; i++) {

    if((i + 1) % 2 === 0 && collection[i] % 2 === 0){
      if (collection[i] < 10){
        even1Num.push(collection[i]);
      }
      else if(collection[i] < 100){
        even10Num.push(collection[i]);
      }
      else {
        even100Num.push(collection[i]);
      }
    }

  }
  if(even1Num.length != 0){
    return [even1Num.reduce((a, b) => a + b) / even1Num.length, even10Num.reduce((a, b) => a + b) / even10Num.length, even100Num.reduce((a, b) => a + b) / even100Num.length];
  }
  else if(even1Num.length === 0 && even10Num.length === 0 && even100Num.length === 0){
    return [0];
  }
  else {
    return [even100Num.reduce((a, b) => a + b) / even100Num.length];
  }
};
module.exports = even_group_calculate_average;
