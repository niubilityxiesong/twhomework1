function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let collection_b = object_b['value'];
  return collection_a.filter(elm => {return collection_b.indexOf(elm) != -1});
}

module.exports = collect_same_elements;
