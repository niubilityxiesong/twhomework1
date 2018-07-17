'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  return collection_a.filter(elm => collection_b.indexOf(elm) < 0);
}

module.exports = choose_no_common_elements;
