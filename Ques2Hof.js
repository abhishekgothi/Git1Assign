
function forEachCustom(arr, callback) {

  for (let i = 0; i < arr.length; i++) {
    arr1[i]=callback(arr[i], i, arr);
  }
  return arr1;
}
let arr1=[]
let arr=[1,2,3,4,5];
let IncrementArr=[]
IncrementArr=forEachCustom(arr,callback);
function callback(element, index, arr){
 arr[index]= element+1;
 return arr[index]

}
console.log(IncrementArr)