'use strict';
var single_element = function(collection){

  let evenNum = [];
  let result = [];

  for (let i = 0; i < collection.length; i++) {

    if((i + 1) % 2 === 0){
      evenNum.push(collection[i]);
    }

  }

  for (let i = 0; i < evenNum.length; i++) {
    let count = 0;
    for (let j = i + 1; j < evenNum.length; j++) {

      if(evenNum[i] === evenNum[j]){
        count++;
        i++;
      }
    }
    if (count === 0){
      result.push(evenNum[i]);
    }
  }
  return result.sort((a, b) => a - b);
};
module.exports = single_element;
