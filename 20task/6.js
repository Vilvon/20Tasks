function rm(arr, count = 1) {
  let res = [];
  for (let i = count; i < arr.length; i++) {
    res.push(arr[i]);
  }
  return res;
}

let a = [];

console.log(rm([1, 2, 3])); // [2, 3]

console.log(rm([1, 2, 3], 2)); // [3]

console.log(rm([1, 2, 3], 5)); // []

console.log(rm([1, 2, 3], 0)); // [1, 2, 3]
