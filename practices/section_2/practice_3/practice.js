function count_same_elements(collection) {
  //在这里写入代码
  let countNum = 1;
  var result = [];

  for (let i = 0; i < collection.length; i++) {
    if (collection[i] === collection[i + 1]){
      countNum++;
    }
    else if (collection[i + 1].length > 1){

    }
  }
}

module.exports = count_same_elements;
