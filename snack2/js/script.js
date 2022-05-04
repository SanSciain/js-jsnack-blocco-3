const array=[];

let sum=0;

do{
    let number = parseInt(prompt("Inserire un numero"));
    sum += number;
    if (sum<50){
        array.push(number);
    }
}while(sum<50);

alert("la somma dei numeri inseriti è maggiore di 50");
console.log(array);