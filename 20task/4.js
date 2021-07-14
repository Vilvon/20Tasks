const arr1 = clearArray([1, 0, 2, false, "", 3]);

function clearArray(array) {
  return array.filter((iteam) => !!iteam);
}

console.log(arr1); // [1, 2, 3]
