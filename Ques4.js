let arr=[1, 2, 3, 4, 5];

arr=arr.filter(EvenFilter);

function EvenFilter(item){
    if(item%2==0){
        return item;
    }
    
}

let SquaresArr=arr.map(SquareOfArr);

function SquareOfArr(item){
    return item*item ;
}

let sum=0;
sum=SquaresArr.reduce(SumOfArr);

function SumOfArr(item,sum){
    return sum+=item
    
}

console.log(sum)