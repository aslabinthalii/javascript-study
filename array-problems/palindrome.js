let palindrome="madam"
let result=""

for(let i=palindrome.length-1;i>=0;i--){
    result+=palindrome[i]
    

}

if(palindrome===result){
    console.log("its palindrome")
}else{
    console.log("its not palindrome")
}