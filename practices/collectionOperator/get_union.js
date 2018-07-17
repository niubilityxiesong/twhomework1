'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  let result = [];

  result = collection_a.filter(elm => result.indexOf(elm) === -1);
  result = result.concat(collection_b.filter(elm => result.indexOf(elm) === -1));
  return result;
}

module.exports = get_union;

