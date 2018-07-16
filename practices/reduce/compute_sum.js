'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  return collection.reduce(function (lem, sum) {
    return lem + sum;
  })
}

module.exports = calculate_elements_sum;

