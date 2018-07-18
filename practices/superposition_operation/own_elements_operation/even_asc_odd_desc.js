'use strict';
var even_asc_odd_desc = function(collection){

  let evenNum = [];
  let oddNum = [];

  for (let i = 0; i < collection.length; i++) {
    if (collection[i] % 2 === 0){
      evenNum.push(collection[i]);
    }
    else {
      oddNum.push(collection[i]);
    }
  }

  return evenNum.sort((a, b) => a - b).concat(oddNum.sort((a, b) => b - a));
};
module.exports = even_asc_odd_desc;
