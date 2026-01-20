let array=[1,2,1,3,5,1,6,6]

let result=[]


for(let i=0;i<array.length;i++){
    let count=0

    for(let j=0;j<array.length;j++){
        if(array[i]===array[j]){
            count++
        }
    }if(count===1){
        result.push(array[i])
    }
}console.log(result)