function count_same_elements(collection) {
  //在这里写入代码
  let countNum = 1;
  let result = [];

  for (let i = 0; i < collection.length - 1; i++) {
    if(collection[i] == collection[i + 1]){
      countNum++;
    }
    else {
      var tempMap = {};
      tempMap.key = collection[i];
      tempMap.count = countNum;
      result.push(tempMap);
      countNum = 1;
    }
  }
  var tempMap = {};
  tempMap.key = collection[collection.length - 1][0];
  tempMap.count = parseInt(collection[collection.length - 1][2]);
  result.push(tempMap);
  console.log(result);
  return result;
}

module.exports = count_same_elements;
