let arr=[1, 2, 3, 4, 5, 6];

arr=arr.filter(EvenFilter);

function EvenFilter(item){
    if(item%2==0){
        return item;
    }
    
}

console.log(arr)