function count_same_elements(collection) {
  //在这里写入代码
  let countNum = 1;
  var result = [];

  for (let i = 0; i < collection.length - 1; i++) {
    if (collection[i] === collection[i + 1]){
      countNum++;
    }
    else if (collection[i + 1].length > 1 && collection[i] === collection[i + 1][0]){
      if(collection[i + 1].length === 3){
        let tempNum = parseInt(collection[i + 1][2]);
        countNum += tempNum;
      }
      else {
        let tempNum = parseInt(collection[i + 1][2] + collection[i + 1][3]);
        countNum += tempNum;
      }

      if (i < collection.length - 2 && collection[i + 1][0] === collection[i + 2]) {
        countNum++;
      }

      if(i < collection.length - 2 && collection[i + 1][0] != collection[i + 2]){
        let tempMap = {};
        if (collection[i] === 1) {
          tempMap.name = collection[i];
        }
        else {
          tempMap.name = collection[i][0];
        }

        tempMap.summary = countNum;
        result.push(tempMap);
        countNum = 1;
      }
      i++;
    }
    else {
      let tempMap = {};
      if (collection[i] === 1) {
        tempMap.name = collection[i];
      }
      else {
        tempMap.name = collection[i][0];
      }

      if(countNum == 1 && collection[i][0] != 1){
        tempMap.summary = parseInt(collection[i][2]);
      }
      else {
        tempMap.summary = countNum;
      }

      result.push(tempMap);
      countNum = 1;
    }
  }

  let tempMap = {};
  tempMap.name = collection[collection.length - 1][0];
  tempMap.summary = parseInt(collection[collection.length - 1][2]);
  result.push(tempMap);

  return result;
}

module.exports = count_same_elements;
