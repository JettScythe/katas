const repeatNumbers = function(data) {
  let softSol = "";
  let hardSol = "";
  for (let i = 0; i < data.length; i++) {
    const numToRep = data[i][0];
    const repCount = data[i][1];
    softSol = softSol + ", "  + numToRep.toString().repeat(repCount);
    hardSol = softSol.replace(/^,|,$/g,'');
  }
  return hardSol;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));