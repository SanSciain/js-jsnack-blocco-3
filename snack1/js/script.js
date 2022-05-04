const frstArray=fillArray();
const scndArray=fillArray();

console.log(frstArray);
console.log(scndArray);

if (frstArray.length < scndArray.length){
    const diff = scndArray.length-frstArray.length;
    addToArray(frstArray,diff);
} else if(frstArray.length > scndArray.length){
    const diff = frstArray.length-scndArray.length;
    addToArray(scndArray,diff);
}

console.log(frstArray);
console.log(scndArray);


function addToArray(array, diff){
    for (let i=0;i<diff;i++){
        array.push(getRndInteger(1,99));
    }
}   

function fillArray(){
    let counter=0;
    arrayLength=getRndInteger(1,29);
    const array=[];
    while(counter<arrayLength) {
        array.push(getRndInteger(1,99));
        counter++;
    }
    return array;
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}