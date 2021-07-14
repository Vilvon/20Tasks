function splitArray(arr, count) {
  return arr.reduce(
    (res, indx) => {
      if (res[res.length - 1].length < count) {
        res[res.length - 1].push(indx);
      } else {
        res.push([indx]);
      }
      return res;
    },
    [[]]
  );
}

const arr1 = splitArray(["a", "b", "c", "d", "e", "f"], 2);

console.log(arr1); // [['a', 'b'], ['c', 'd'], ['e', 'f']]
