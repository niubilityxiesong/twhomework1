'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码

  let judge_rise = number_a > number_b ? true : false;
  let max = judge_rise ? number_a : number_b;
  let min = judge_rise ? number_b : number_a;
  let result = [];
  const LIST_ARRAT = 'abcdefghijklmnopqrstuvwxyz';
  const NUMBER_OF_ARRAY = 26;

  for (let i = min; i <= max; i++) {
    if (i <= NUMBER_OF_ARRAY){
      result.push(LIST_ARRAT[i - 1]);
    }
    else {
      let temp_array = "";
      let remainder = i % NUMBER_OF_ARRAY;
      let merchant = Math.floor(i / NUMBER_OF_ARRAY);

      if(remainder == 0){
        remainder = NUMBER_OF_ARRAY;
        merchant--;
      }
      temp_array = LIST_ARRAT[merchant - 1] + LIST_ARRAT[remainder - 1];
      result.push(temp_array);
    }
  }

  if(!judge_rise)
    return result;
  else
    return result.reverse();
}

module.exports = get_letter_interval_2;

