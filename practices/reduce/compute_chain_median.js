'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  let arrayNum = [];
  arrayNum = collection.split("->").map(elm => {return parseInt(elm)}).sort((a, b) => a - b);
  if(arrayNum.length % 2 != 0){
    return arrayNum[arrayNum.length / 2];
  }
  else {
    return (arrayNum[arrayNum.length / 2] + arrayNum[arrayNum.length / 2 - 1]) / 2;
  }
}

module.exports = compute_chain_median;
