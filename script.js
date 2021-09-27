function getArr() {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    return function takeArr() {
      return arr;
    }
  }
  
let newArr = getArr();

function recursArrSum(arr, arrIndex) {
    let res = 0;
    return (arrIndex < 0 || arrIndex > arr.length - 1)?
    res:res + arr[arrIndex] + recursArrSum(arr, arrIndex - 1);
}

arrSumm = recursArrSum(newArr(), 3);

console.log(arrSumm);
