'use strict';
function map_to_even(collection){

  let result = [];

  result = collection.map(elm => {return elm * 2});
  return result;
}
module.exports = map_to_even;
