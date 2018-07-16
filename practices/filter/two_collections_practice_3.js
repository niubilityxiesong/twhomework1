'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  return collection_a.filter(elm => {
    for (let i = 0; i < collection_b.length; i++) {
      if (elm % collection_b[i] === 0)
        return true;
    }
    return false;
  });
}

module.exports = choose_divisible_integer;
