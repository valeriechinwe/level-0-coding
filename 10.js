function commonLetters(s1, s2) {
  let result = [];
  for (let i of s1) {
    for (let n of s2) {
      if (n === i) {
        result.push(n);
      }
    }
  }
  return result.join(", ");
}

let s1 = "house";
let s2 = "computers";
console.log(commonLetters(s1, s2));
