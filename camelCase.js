const camelCase = function(input) {
  return input.replace(/[' ']\w/g, function(x) {
    return x[1].toUpperCase();
  });
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));