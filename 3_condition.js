const flag=true
if(flag){
    console.log('True')}
    else{
        console.log('False')
    }
console.log('-------------------')
if(!flag){
    console.log('True')}
    else{
        console.log('False')
    }
console.log('-------------------')
let i=0
while(i<10){
    console.log(i)
    i++
}
console.log('-------------------')
let j=0
do{
    j++
    console.log(j)
}
while(j<10)
{
    console.log('do while loop'+j)
}
console.log('-------------------')
for(let k=0; k<100; k++){
    if(k%2 == 0 && k%5==0){ // Even Numbers along with multiple of 5
        console.log(k); 
    }
}
console.log('-------------------')