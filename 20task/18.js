const arr1 = [1, 2, "a"];
const arr2 = [1, 2, 3, 4, "b"];

function diff(arr1, arr2) {
  let res = [];
  arr1.forEach((element1) => {
    if (
      !arr2.reduce((res, element2) => {
        if (res) {
          return true;
        }
        if (element1 == element2) {
          return true;
        }
      }, false)
    ) {
      res.push(element1);
    }
  });

  arr2.forEach((element1) => {
    if (
      !arr1.reduce((res, element2) => {
        if (res) {
          return true;
        }
        if (element1 == element2) {
          return true;
        }
      }, false)
    ) {
      res.push(element1);
    }
  });

  return res;
}

console.log(diff(arr1, arr2)); // [a,3,4,b]
