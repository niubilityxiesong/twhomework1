'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  return collection.map(elm => elm * 3 + 2).reduce((x, y) => x + y);
}

module.exports = hybrid_operation;

