'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  let result = [];
  let tempNum = number * 100;

  result.push(number);
  while(tempNum > 0){
    tempNum -= interval * 100;
    result.push(tempNum / 100);
  }
  return result;
}

module.exports = spilt_to_zero;
