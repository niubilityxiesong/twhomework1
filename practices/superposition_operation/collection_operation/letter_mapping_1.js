'use strict';

function even_to_letter(collection) {
  //在这里写入代码

  const ASSIC_A_CODE = 96;

  return collection.filter(elm => elm % 2 === 0).map(elm => {return String.fromCharCode(ASSIC_A_CODE + elm)});
}

module.exports = even_to_letter;
