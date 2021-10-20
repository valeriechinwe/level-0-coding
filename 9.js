function listVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  var letters = str.split('');
  var findVowels = [];

  for (var i in letters) {
    if (vowels.includes(letters[i])) {
      findVowels.push(letters[i]);
    }
  }
  console.log("Vowels:", findVowels.join(""));
}

var str = "Umuzi";
listVowels(str);
