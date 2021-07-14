const arr = ['a','b','c'];

function implode(arr,str) {
   return arr.join(str);
}

console.log(implode(arr, '-')); // 'a-b-c'