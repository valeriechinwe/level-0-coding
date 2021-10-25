function celciusToFahrenheit(x) {
  let celcius = x * 1.8 + 32;

  return celcius;
}

function fahrenheitToCelcius(x) {
  let p = x - 32;
  let fahrenheit = p * 5 / 9;

  return fahrenheit;
}

// test
console.log(celciusToFahrenheit(37));
console.log(fahrenheitToCelcius(67));
