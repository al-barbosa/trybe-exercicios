function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}



describe('Teste da função myRemove', () => {
  test('Teste de retorno', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  })
  test('Teste de não retorno', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  })
})