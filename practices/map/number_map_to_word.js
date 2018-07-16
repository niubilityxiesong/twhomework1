'use strict';
var number_map_to_word = function(collection){

  const ASSIC_A_CODE = 96;
  return collection.map(elm => {
      return String.fromCharCode(ASSIC_A_CODE + elm);
  });
};

module.exports = number_map_to_word;
