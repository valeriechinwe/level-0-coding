function cToF(x) {
  var celcius = x * 1.8 + 32;

  return celcius;
}

function fToC(x) {
  var p = x - 32;
  var fahrenheit = p * 5 / 9;

  return fahrenheit;
}

// test
console.log(cToF(37));
console.log(fToC(67));
