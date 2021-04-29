const numberOfVowels = function(data) {
  let vowels = 'aeiou';
  let total = 0;
  for (let a in data) {
    if (vowels.indexOf(data[a]) != -1) {
      total += 1;
    }
  }
  return total;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));