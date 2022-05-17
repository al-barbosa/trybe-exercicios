//1

function factorial (num){
  if (num === 1){
    return 1;
  } else {
    return num * factorial(num-1);
  }
}


//2

function invert (palavra) {
  let ans = "";
  for (let i = palavra.length-1; i >= 0; i -= 1){
    ans += palavra[i];
  }
  return ans;
}


//3

let arr = ['java', 'javascript', 'css', 'python', 'html'];

function min(arr){
  let cont = arr[0]
  for (let i = 1; i < arr.length; i += 1){
    if (arr[i].length < cont.length){
      cont = arr[i]
    }
  }
  return cont
}

function max(arr){
  let cont = arr[0]
  for (let i = 1; i < arr.length; i += 1){
    if (arr[i].length > cont.length){
      cont = arr[i]
    }
  }
  return cont
}


//4

function maxPrime(n){
  let ans = []
  for (let i = 0; i <= n; i += 1){
    if (prime(i)){
      ans.push(i)
    } 
  }
  return ans[ans.length-1]
}

function prime(n){
  let cont = 0
  for (let i = 2; i < n; i += 1){
    if (n%i === 0){
      return false
    }
  }
  return cont === 0
}