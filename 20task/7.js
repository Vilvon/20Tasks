function rm(arr, count = 1) {
  let res = [];
  for (let i = 0; i < arr.length - count; i++) {
    res.push(arr[i]);
  }
  return res;
}

let a = [];

console.log(rm([1, 2, 3])); // [1, 2]

console.log(rm([1, 2, 3], 2)); // [1]

console.log(rm([1, 2, 3], 5)); // []

console.log(rm([1, 2, 3], 0)); // [1, 2, 3]
