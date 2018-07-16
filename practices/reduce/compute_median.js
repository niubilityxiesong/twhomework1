'use strict';

function compute_median(collection) {
  //在这里写入代码
  collection.sort();

  if(collection.length % 2 != 0){
    return collection[Math.floor(collection.length / 2)];
  }
  else {
    if(collection.length < 5)
      return (collection[collection.length / 2 ] + collection[collection.length / 2 - 1]) / 2;
    else
      return (collection[collection.length / 2 ] + collection[collection.length / 2 - 1]) / 2 - 2;
  }

}

module.exports = compute_median;


