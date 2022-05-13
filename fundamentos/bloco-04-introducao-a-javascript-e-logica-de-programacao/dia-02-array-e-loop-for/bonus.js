let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let nArray = []

for (let i = 1; i < numbers.length; i++){
  for (let j = i-1; j < i; j++){
    if (i != numbers.length-1){
      nArray[j] = numbers[i] * numbers[j]
    } else {
      nArray[j] = numbers[i]*2
    }
  }
}