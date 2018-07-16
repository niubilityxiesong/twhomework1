'use strict';

function collect_all_even(collection) {
  //在这里写入代码

  var result = [];
  for (var i = 0; i < collection.length; i++) {
    if (i % 2 === 0 && i != 0){
      result.push(i);
    }
  }

  return result;
}

module.exports = collect_all_even;
