'use strict';

function compute_average(collection) {
  //在这里写入代码
  let sum = collection.reduce(function (elm, item) {
    return elm + item;
  });
  return sum / collection.length;
}

module.exports = compute_average;

