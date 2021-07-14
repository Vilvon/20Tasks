function findYear(firstDate, secondDate) {
  res = [];
  while (firstDate <= secondDate) {
    if (firstDate % 4 == 0 && firstDate % 100 != 0) res.push(firstDate);
    firstDate++;
  }
  return res;
}


console.log(findYear(1990, 2018)); // [1992, 1996, 2004, 2008, 2012, 2016]
