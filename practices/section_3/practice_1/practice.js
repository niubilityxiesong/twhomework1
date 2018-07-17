function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let strLength = collection_a.length;
  let result = [];

  for (let i = 0; i < strLength; i++) {
    result.push(collection_a[i]);
    for (let j = 0; j < object_b["value"].length; j++) {
      if (collection_a[i].key === object_b["value"][j]){
        result[i].count--;
      }
    }
  }
  return result;
}

module.exports = create_updated_collection;
