let array=[1,2,1,3,42,4,5,2]

let result=[]

for(let i=0;i<array.length;i++){
    count=0
    
    for(let j=0;j<array.length;j++){
        if(array[i]===array[j]){
            count++
        }
    }if(count===1){
    result.push(array[i])
    }
    count =0
}console.log(result)
