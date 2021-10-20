function toHours(x) {
  var hours = Math.floor(x / 60);
  var minutes = x % 60;

if (hours > 1 && minutes > 1) {
  return hours + " hours, " + minutes + " minutes";

} else if (hours > 1 && minutes <= 1) {
    return hours + " hours, " + minutes + " minute";

} else if (hours <= 1 && minutes > 1) {
  return hours + " hour, " + minutes + " minutes";

} else {
  return hours + " hour, " + minutes + " minute";
}
}

// test
console.log(toHours(71));
