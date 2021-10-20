function maxNum(x, y, z, t) {
  var i;
  var maximum = -Infinity;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > maximum) {
      maximum = arguments[i];
    }
  }
  return maximum;
}
//test
console.log(maxNum(7, 500, 90, 6001));
