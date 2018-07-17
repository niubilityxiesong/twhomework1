function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let result = [];

  for (let i = 0; i < collection_a.length; i++) {
    result.push(collection_a[i]);
    for (let j = 0; j < object_b["value"].length; j++) {
      if(collection_a[i].key === object_b["value"][j]){
        let remain = Math.floor(collection_a[i].count / 3);
        result[i].count -= remain;
      }
    }
  }

  return result;
}

module.exports = create_updated_collection;
