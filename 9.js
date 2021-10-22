function listVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  var letters = str.split('');
  var findVowels = [];

  for (var i in letters) {
    if (vowels.includes(letters[i])) {
      findVowels.push(letters[i]);
    }
  }
  var result = findVowels.join(", ").toLowerCase();
  var finalResult = result.replace(/(.)(?=.*\1)/g, "");

  console.log("Vowels: " + finalResult);
}
var str = "Umuzi";
listVowels(str);
