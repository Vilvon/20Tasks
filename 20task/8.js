function replaceIn(arr, ch, start = 0,end = arr.length) {
    for (let i = start; i < end; i++) {
        arr[i]=ch;
    }
    return arr;
}



const arr1 = [1, 2, 3];
 
replaceIn(arr1, 'a');
console.log(arr1); // ['a', 'a', 'a']
 
replaceIn(arr1, 2);
console.log(arr1); // [2, 2, 2]
 
const arr2 = [4, 6, 8, 10];
replaceIn(arr2, '*', 1, 3);
console.log(arr2); // [4, '*', '*', 10]