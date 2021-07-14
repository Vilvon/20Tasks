function sort(arr) {
  let b = true;
  let buff;
  while (b) {
    b = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        buff = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = buff;
        b = true;
      }
    }
  }
  return arr;
}

const arr = [3, 8, 7, 6, 5, -4, 3, 2, 1];

console.log(sort(arr)); // [-4,1,2,3,3,5,6,7,8]
