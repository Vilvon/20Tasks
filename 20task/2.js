const arr1 = [
  [1, 2],
  [3, 4],
];
const arr2 = aCopy(arr1);

function aCopy(arr) {
  return arr.reduce((res, indx) => {
    res.push(indx);
    return res;
  }, []);
}

arr1.push([5, 6]);

console.log(arr1); // [[1,2], [3,4], [5,6]]
console.log(arr2); // [[1,2], [3,4]]

// --

const arr3 = [
  ["a", "b", "c", "d"],
  ["e", "f"],
  ["g", "h", "i"],
];
const arr4 = aCopy(arr3);

arr3.unshift(["z"]);

console.log(arr3); // [['z'], ['a','b', 'c','d'], ['e', 'f'], ['g', 'h', 'i']]
console.log(arr4); // [['a','b', 'c','d'], ['e', 'f'], ['g', 'h', 'i']]
