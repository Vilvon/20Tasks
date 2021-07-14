console.log(
  [1, 4, 3, 0, 4, 5, 4]
    .filter((el) => el % 2 == 0)
    .reduce((res, iteam) => (res += Math.sqrt(iteam)),0)
); // 6
