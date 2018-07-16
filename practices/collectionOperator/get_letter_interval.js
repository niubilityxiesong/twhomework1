'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码

  let result = [];
  const ASCII_A_CODE = 96
  if(number_a < number_b){
    for (let i = number_a; i <= number_b; i++) {
      result.push(String.fromCharCode(ASCII_A_CODE + i));
    }
  }
  else if(number_a > number_b){
    for (let i = number_a; i >= number_b ; i--) {
      result.push(String.fromCharCode(ASCII_A_CODE + i));
    }
  }
  else {
    result.push(String.fromCharCode(ASCII_A_CODE + number_b));
  }

  return result;
}

module.exports = get_letter_interval;
