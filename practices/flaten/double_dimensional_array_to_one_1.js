'use strict';

function double_to_one(collection) {

  //在这里写入代码

  let result = [];
  for (let i = 0; i < collection.length; i++) {
    result = result.concat(collection[i]);
  }

  return result;
}

module.exports = double_to_one;
