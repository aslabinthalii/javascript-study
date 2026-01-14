let array=[10,20,30,40]

let largest=array[0]

for(let i=0;i<array.length;i++){
    if(array[i]>largest){
        largest=array[i]
    }
}
console.log(largest)