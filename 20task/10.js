const arr1 = [1, 2, 3, 4, 2, 5, 6, 1, 3];

function uni(arr) {
  let res = [];
  let buffer;
  for (let i = 0; i < arr.length; i++) {
    buffer = arr[i];

    if (
      arr.reduce((res, iteam) => {
        if (buffer == iteam) res++;
        return res;
      }, 0) > 1
    ) {
      if (
        res.reduce((res, iteam) => {
          if (res && iteam != buffer) {
            return true;
          } else {
            return false;
          }
        }, true)
      ) {
        res.push(buffer);
      }
    }
  }
  return res;
}

const arr2 = uni(arr1);

console.log(arr2); // [1,2,3]
