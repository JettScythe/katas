const conditionalSum = function(values, condition) {
  let total = 0;
  if (condition == "even") {
    for (let a = 0; a < values.length; a++) {
      if (values[a] % 2 === 0) {
        total += values[a];
      }
    }
  } else if (condition == "odd") {
    for (let a = 0; a < values.length; a++) {
      if (values[a] % 2 != 0) {
        total += values[a];
      }
    }
  }
  return total;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));