'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  collection = collection.sort((a, b) => a - b);
  let keyNum = 0;
  let median = Math.floor(collection.length / 2);

  if (median != 0){
    keyNum = collection[median - 1];
  }
  else {
    keyNum = Math.floor((collection[median] + collection[median - 1]) / 2);
  }


  if (keyNum > 26){
    let shang = Math.floor(keyNum / 26);
    console.log(shang);
    let yushu = keyNum % 26;
    console.log(yushu);

    return String.fromCharCode(shang + 96) + String.fromCharCode(yushu + 97);
  }
  else {
    return String.fromCharCode(keyNum + 26)
  }

}

module.exports = median_to_letter;
