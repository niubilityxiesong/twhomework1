'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  return collection.filter(elm => elm % 2 != 0).map(elm => elm * 3 + 5).reduce((x, y) => x + y);
}

module.exports = hybrid_operation_to_uneven;

