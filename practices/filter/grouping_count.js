'use strict';

function grouping_count(collection) {

  //在这里写入代码
  let mapResult = {};
  let countNum = 1;

  collection.sort();

  for (let i = 0; i < collection.length - 1; i++) {
    if(collection[i] === collection[i + 1]){
      countNum++;
      mapResult[collection[i]] = countNum;
    }
    else{
      countNum = 1;
    }

  }
  return mapResult;
}

module.exports = grouping_count;
