'use strict';
var number_map_to_word_over_26 = function(collection){
  const ASSIC_A_CODE = 96;
  return collection.map(elm => {
    if(elm < 26){
      return String.fromCharCode(ASSIC_A_CODE + elm);
    }
    else {
      let shang = Math.floor(elm / 26);
      let yushu = elm % 26;
      let temparray = [];

      if (shang === 0){
        yushu = ASSIC_A_CODE;
        shang--;
      }
      temparray = String.fromCharCode(ASSIC_A_CODE + shang) + String.fromCharCode(ASSIC_A_CODE + yushu);
      return temparray;
    }
  });
};

module.exports = number_map_to_word_over_26;
