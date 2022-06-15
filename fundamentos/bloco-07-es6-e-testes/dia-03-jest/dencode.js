function encode(quote) {
  let ans = '';
  for (let i = 0; i < quote.length; i += 1) {
    if (quote[i] === 'a') {
      ans += 1;
    } else if (quote[i] === 'e') {
      ans += 2;
    } else if (quote[i] === 'i') {
      ans += 3;
    } else if (quote[i] === 'o') {
      ans += 4;
    } else if (quote[i] === 'u') {
      ans += 5;
    } else {
      ans += quote[i];
    }
  }
  return ans;
}

function decode(quote) {
  let ans = '';
  for (let i = 0; i < quote.length; i += 1) {
    if (quote[i] === '1') {
      ans += 'a';
    } else if (quote[i] === '2') {
      ans += 'e';
    } else if (quote[i] === '3') {
      ans += 'i';
    } else if (quote[i] === '4') {
      ans += 'o';
    } else if (quote[i] === '5') {
      ans += 'u';
    } else {
      ans += quote[i];
    }
  }
  return ans;
}

console.log(decode('bcdfghjklmnpqrstvwxyz').length);

module.exports = { encode, decode }