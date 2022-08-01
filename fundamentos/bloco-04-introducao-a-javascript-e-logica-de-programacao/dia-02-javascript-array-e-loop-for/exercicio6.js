let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numImpar = 0;

for(let index = 0; index < numbers.length; index += 1){
    if (numbers[index]%2 === 1){
        numImpar += 1;
    }  
}
console.log(numImpar) 

if (numImpar === 0){
    console.log("Nenhum valor ímpar encontrado");
}
    