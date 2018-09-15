module.exports = function longestConsecutiveLength(array) {
  maxLength = 0;
  if(!Array.isArray(array) || array.length == 0){
    return maxLength;
  }

  var hashMap = {};
  array.forEach(function(element){
    hashMap[element] = element;
  })

  for(key in hashMap){
    count = 1;
    numKey = Number(key)
    count += findSequence(hashMap, numKey - 1, v => v - 1);
    count += findSequence(hashMap, numKey + 1, v => v + 1);
    maxLength = maxLength < count ? count : maxLength
  }
  return maxLength;
}

function findSequence(hashMap, key, nextValueCalculator){
  if(hashMap[key]){
    delete hashMap[key]
    return 1 + findSequence(hashMap, nextValueCalculator(key), nextValueCalculator);
  }
  return 0;
}

module.exports([100, 4, 200, 1, 3, 2])