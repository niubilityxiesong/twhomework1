'use strict';

function double_to_one(collection) {

  //在这里写入代码
  let result = [];
  let array = [];

  for (let i = 0; i < collection.length; i++) {
    array = array.concat(collection[i]);
  }

  array.map(elm => {
    if (result.indexOf(elm) == -1){
      result.push(elm);
    }
  });
  return result;
}

module.exports = double_to_one;
