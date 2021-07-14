const arr = [7, "z", "z", "z", 3, 7, "z", 7, "z", 3, 5, 9, 7];

function fn(arr) {
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
  return res[
    res
      .map((el) => {
        return arr.reduce((res, iteam) => {
          if (el == iteam) res++;
          return res;
        }, 0);
      })
      .reduce((res, iteam, i) => {
        if (i == 0) {
          res = [0, res];
        }
        if (res[1] > iteam) {
          return res;
        } else {
          return [i, iteam];
        }
      })[0]
  ];

  return res1;
}

console.log(fn(arr)); // 'z'
