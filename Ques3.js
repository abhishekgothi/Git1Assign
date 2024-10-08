let arr=[5, 10, 15, 20];
let sum=0;
sum=arr.reduce(SumOfArr);

function SumOfArr(item,sum){
    return sum+=item
    
}

console.log(sum)