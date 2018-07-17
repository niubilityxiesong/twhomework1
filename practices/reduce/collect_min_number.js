'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  collection.sort((a, b) => a - b);
  return collection[0];
}

module.exports = collect_min_number;

