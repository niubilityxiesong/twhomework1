function collect_same_elements(collection_a, object_b) {
  //在这里写入代码

  var arrayA = [];
  var arrayB = [];

  for (let i = 0; i < collection_a.length; i++) {
    arrayA.push(collection_a[i]["key"]);
  }
  arrayB = object_b['value'];

  return arrayA.filter(elm => {return arrayB.indexOf(elm) != -1});
}

module.exports = collect_same_elements;
