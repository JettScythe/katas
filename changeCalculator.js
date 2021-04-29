const currencyDenominations = ['twentyDollar', 'tenDollar', 'fiveDollar', 'twoDollar', 'oneDollar', 'quarter', 'dime', 'nickel', 'penny'];
const currencyValue = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];

const calculateChange = (total, cash) => {
  let change = {};
  let dif = cash - total;
  let i = 0;
  while (i < currencyValue.length) {
    if (dif > currencyValue[i]) {
      change[currencyDenominations[i]] = Math.floor(dif / currencyValue[i]);
      dif = dif % currencyValue[i];
    }
    i++;
  }
  return change;
};
console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
