const arr = ['a', 'b', 'c', 'd'];


function nfa(array,index) {
    if (index>=0) {
        return array[index];
    } else {
        return array[array.length + index]
    }
}

console.log(nfa(arr, 1)); // 'b'
console.log(nfa(arr, -2)); // 'c';