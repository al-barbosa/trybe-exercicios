//1

function palin(n){
  if (n.length <= 1){
    return true
  } else if (n[0] === n[n.length-1]){
    let newW = ""
    for (let i = 1; i < n.length-1; i += 1){
      newW += n[i]
    }
    return palin(newW)
  } else {
    return false
  }
}


//2

function max(arr){
  let max = arr.reduce((acc, cVal) => {
    return acc > cVal ? acc : cVal
  })
  return arr.indexOf(max)
}


//3

function min(arr){
  let min = arr.reduce((acc, cVal) => {
    return acc < cVal ? acc : cVal
  })
  return arr.indexOf(min)
}


//4

function maxL(arr){
  let max = arr.reduce((acc, cVal) => {
    return acc.length < cVal.length ? cVal : acc
  }, "")
  return max
}


//5

function rpt(arr){
  let ans = {}
  for (let i = 0; i < arr.length; i += 1){
    if (ans[arr[i]] >= 1){
      ans[arr[i]] += 1
    } else {
    ans[arr[i]] =1
    }
  }
  let final = 0
  for (let i in ans){
    if (ans[i] > final){
      final = i
    }
  }
  return final
}





