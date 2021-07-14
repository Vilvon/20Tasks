const arr1 = [1];

function concatArray() 
{
    let res =[];
    for (let i = 0; i < arguments.length; i++) {
        if(arguments[i].length >0)
        {
           res.push(...(arguments[i]))
        }
        else
        {
            res.push(arguments[i])
        }
    }
    return res
}

const arr2 = concatArray(arr1, 2, [3], [[4]]);

console.log(arr2); // [1, 2, 3, [4]]
console.log(arr1); // [1]
