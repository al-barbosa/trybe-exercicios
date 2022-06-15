function techList(arr, n) {
  arr = arr.sort()
  if (arr.length === 0) {
    return 'Vazio!';
  }
  let ans = [];
  for (let i = 0; i < arr.length; i += 1) {
    let nO = {
      tech: arr[i],
      name: n,
    };
    ans.push(nO);
  }
  return ans;
}

console.log(techList(['Java', 'Python'], 'Alberto'))

module.exports = techList;