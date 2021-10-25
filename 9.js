function listVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  let letters = str.split('');
  let findVowels = [];

  for (let i in letters) {
    if (vowels.includes(letters[i])) {
      findVowels.push(letters[i]);
    }
  }
  let result = findVowels.join(", ").toLowerCase();
  let finalResult = result.replace(/(.)(?=.*\1)/g, ""); // remove duplicates with regex

  console.log("Vowels: " + finalResult);
}
let str = "Umuzi";
listVowels(str);
