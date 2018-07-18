'use strict';

function average_uneven(collection) {

  //在这里写入代码
  return collection.filter(elm => elm % 2 != 0 ).reduce((x, y) => x + y) / collection.filter(elm => elm % 2 != 0 ).length;
}

module.exports = average_uneven;
