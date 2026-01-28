let array=[1,2,3,4,5]

let result=true;

for(let i=0;i<array.length;i++){
    if(array[i]>array[i+1]){
        result=false
    }
}
if(result){
    console.log("its sorted")
}else{
    console.log("its not sorted")
}