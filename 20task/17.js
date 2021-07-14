function rnd(arr) {
  let res = [[], []];
  res[1] = arr.map(() => true);
  let buff;
  while (res[0].length != arr.length) {
    buff = Math.round(Math.random() * (arr.length - 1));
    if (res[1][buff]) {
      res[0].push(arr[buff]);
      res[1][buff] = false;
    }
  }
  return res[0];
}
console.log(rnd([1, 2, 3, 4, 5, 6])); // [6,1,5,4,3,2]
