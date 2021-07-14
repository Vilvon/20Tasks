const arr1 = [1,2,3,4];
const arr2 = init(arr1);

function init(arr)
{
    const res = JSON.parse(JSON.stringify(arr));
    res.pop();
    return res; 
}


console.log(arr2); // [1,2,3]