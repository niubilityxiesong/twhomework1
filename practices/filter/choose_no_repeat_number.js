'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  var result = [];
  collection.map(elm => {
    if(result.indexOf(elm) === -1){
      result.push(elm);
    }});
  return result;
}

module.exports = choose_no_repeat_number;
