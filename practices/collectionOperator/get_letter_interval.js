'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var array = 'abcdefghijklmnopqrstuvwxyz';

  let result = [];
  if(number_a < number_b){
    for (let i = number_a; i <= number_b; i++) {
      result.push(array[i - 1]);
    }
  }
  else if(number_a > number_b){
    for (let i = number_a; i >= number_b ; i--) {
      result.push(array[i - 1]);
    }
  }
  else {
    result.push(array[number_b - 1]);
  }

  return result;
}

module.exports = get_letter_interval;
