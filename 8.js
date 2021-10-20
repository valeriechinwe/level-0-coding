function toHours(x) {
  var hours = Math.floor(x / 60);
  var minutes = x % 60;
  return hours + ":" + minutes;
}
// test
console.log(toHours(90));
