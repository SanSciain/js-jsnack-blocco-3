const container = document.querySelector(".container");

const divPari=document.createElement("div");
divPari.setAttribute("id","pari");
divPari.style.color="green";

const divDispari=document.createElement("div");
divDispari.setAttribute("id","dispari");
divDispari.style.color="red";

container.append(divDispari,divPari);


const array=fillArray();

const arrayEven=array.filter( (number)=>{
    if(number%2===0){
        return number;
    }
} )

const arrayOdd=array.filter( (number)=>{
    if(number%2!==0){
        return number;
    }
} )

divPari.innerHTML=arrayEven;
divDispari.innerHTML=arrayOdd;

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