const arr = [1,2,3,4,5,6,7,8,9];

function implode(arr,str,bool) {
    return arr.filter((iteam)=>(iteam%2) != bool).join(str);
 }

console.log(implode(arr, ':', true)); // '2:4:6:8'
console.log(implode(arr, '*', false)); // '1*3*5*7*9'