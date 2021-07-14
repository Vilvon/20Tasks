function group() {
  let res = [[], []];
  for (let i = 0; i < arguments.length; i++) {
    res[0].push(arguments[i][0]);
    res[1].push(arguments[i][arguments[i].length - 1]);
  }
  return res;
}

console.log(group(["a", "b"], [1, 2], [true, false])); // [['a', 1, true], ['b', 2, false]]
