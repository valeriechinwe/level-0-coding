function commonLetters(s1, s2) {
  var result = [];
  for (var i of s1) {
    for (var n of s2) {
      if (n === i) {
        result.push(n);
      }
    }
  }
  return result;
}

var s1 = "house";
var s2 = "computers";
console.log(commonLetters(s1, s2));
