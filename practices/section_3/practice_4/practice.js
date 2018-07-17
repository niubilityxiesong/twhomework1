function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let countNum = 1;
  let result = [];

  for (let i = 0; i < collection_a.length - 1; i++) {
    if(collection_a[i] == collection_a[i + 1]){
      countNum++;
    }
    else {
      var tempMap = {};
      tempMap.key = collection_a[i];
      tempMap.count = countNum;
      result.push(tempMap);
      countNum = 1;
    }
  }
  var tempMap = {};
  tempMap.key = collection_a[collection_a.length - 1][0];
  tempMap.count = parseInt(collection_a[collection_a.length - 1][2]);
  result.push(tempMap);

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < object_b["value"].length; j++) {
      if(result[i].key === object_b["value"][j]){
        let remain = Math.floor(result[i].count / 3);
        result[i].count -= remain;
      }
    }
  }

  return result;
}

module.exports = create_updated_collection;
