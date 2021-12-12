function checkCashRegister(price, cash, cid) {
  const summarize = (arr) => {
    let sum = 0;
    arr.forEach((element) => {
      sum += element[1];
    });
    sum = parseFloat(sum.toFixed(2));
    return sum;
  };

  const fixesValues = [
    ['ONE HUNDRED', 100],
    ['TWENTY', 20],
    ['TEN', 10],
    ['FIVE', 5],
    ['ONE', 1],
    ['QUARTER', 0.25],
    ['DIME', 0.1],
    ['NICKEL', 0.05],
    ['PENNY', 0.01],
  ];

  const changeObj = {
    'ONE HUNDRED': 0,
    TWENTY: 0,
    TEN: 0,
    FIVE: 0,
    ONE: 0,
    QUARTER: 0,
    DIME: 0,
    NICKEL: 0,
    PENNY: 0,
  };

  const result = { status: '', change: [] };
  const innerCid = cid.reverse();

  const cidSum = summarize(cid);

  let change = cash - price;

  if (change > cidSum) {
    result.status = 'INSUFFICIENT_FUNDS';
    result.change = [];
  } else if (change === cidSum) {
    result.status = 'CLOSED';
    result.change = innerCid.reverse();
  } else {
    result.status = 'OPEN';
    for (let i = 0; i < innerCid.length; i += 1) {
      while (change >= fixesValues[i][1] && innerCid[i][1] > 0) {
        change -= fixesValues[i][1];
        change = parseFloat(change.toFixed(2));
        innerCid[i][1] -= fixesValues[i][1];
        changeObj[fixesValues[i][0]] += fixesValues[i][1];
      }
    }
  }
  // eslint-disable-next-line no-restricted-syntax
  for (const key in changeObj) {
    if (changeObj[key] !== 0) {
      result.change.push([key, changeObj[key]]);
    }
  }

  if (summarize(result.change) < change) {
    result.status = 'INSUFFICIENT_FUNDS';
    result.change = [];
  }

  return result;
}

console.log(
  checkCashRegister(19.5, 20, [
    ['PENNY', 0.5],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 0],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0],
  ])
);
