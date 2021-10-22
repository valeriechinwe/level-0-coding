function celciusToFahrenheit(x) {
  var celcius = x * 1.8 + 32;

  return celcius;
}

function fahrenheitToCelcius(x) {
  var p = x - 32;
  var fahrenheit = p * 5 / 9;

  return fahrenheit;
}

// test
console.log(celciusToFahrenheit(37));
console.log(fahrenheitToCelcius(67));
