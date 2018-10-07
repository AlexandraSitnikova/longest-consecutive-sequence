function uniq(arr) {
  var seen = {};
  return arr.filter(function(item) {
      return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  });
}

module.exports = function longestConsecutiveLength(array) {
  if(array.length === 0) {
    return 0;
  }
  array.sort(function(a,b) {
    return a - b;
  });
  
  let counter = 0;
  let maxLenght = 0;
  let uniqVal = uniq(array);
  for(let i = 0; i < uniqVal.length - 1; i++) {
    if(uniqVal[i + 1] - uniqVal[i] === 1) {
      counter++;
    } else {
      if(maxLenght < counter) {
        maxLenght = counter;
      }

      counter = 0;
    }
  }
  
    return maxLenght + 1;
  }
