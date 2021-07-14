const chars = [
    { 'name': 'tony', 'age': 20 },
    { 'name': 'feel', 'age': 30 }
  ];

function pluck(array, prop)
{
    return array.reduce((res,iteam)=>
    {
        res.push(iteam[prop]);
        return res
    },[])
}

console.log(pluck(chars, 'name')); // ['tony', 'feel']
