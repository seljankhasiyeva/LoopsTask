//TASK 1: Function that finds the numbers that appear only once in an array
let inputarray=[3,7,16,34,62,7,99,105,34,]
let outputtarray=[]
let outputIndex=0
for(let i=0; i<inputarray.length; i++) {
    let currentnumber=inputarray[i]
    let repeatingnumber=0
    for(let j=0; j<inputarray.length; j++) {
        if(inputarray[i]===inputarray[j]) {
            repeatingnumber++
        }
    }
    if(repeatingnumber===1) {
    outputtarray[outputIndex]=currentnumber
    outputIndex++}
} 
console.log(outputtarray)

//TASK 2: Removing an element from an array
let array=[1,3,6,8,13,16,25,77]
let num=13
let found=false
for(i=0; i<array.length; i++) {
    if(array[i]===num) {
        found=true
        for(let j=i; j<array.length; j++) {
            array[j]=array[j+1]; 
        }
        array[array.length-1]=0;
        break
    } 
}
if(!found) {
    console.log("Not found");
} else {
    console.log(array);
}