'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  collection.sort((a, b) => a - b);

  for (let i = 0; i < collection.length; i += 3) {
    if(i + 2 < collection.length){
      let temp = collection[i];
      collection[i] = collection[i + 2];
      collection[i + 2] = temp;

      temp = collection[i];
      collection[i] = collection[i + 1];
      collection[i + 1] = temp;
    }
  }
  return collection;
}
module.exports = rank_by_two_large_one_small;
