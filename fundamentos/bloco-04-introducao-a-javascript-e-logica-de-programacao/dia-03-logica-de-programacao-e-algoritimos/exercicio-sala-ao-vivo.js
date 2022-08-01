let soma = 0;
for (let index = 1; index <= 50; index += 1){
     soma += index;
}
console.log("A soma de 1 a 50 é:", soma);

// parte 2

let numbers = 0;
for (let index2 = 2; index2 <= 150; index2 += 1){
    if (index2 % 3 === 0){
        numbers += 1
    }
}
if (numbers === 50){
    console.log("Mensagem secreta");
}
console.log(numbers);

// parte 3

let ageNat = 25;
let ageRenan = 27;
let ageSincero = 26;

if (ageNat < ageRenan && ageNat < ageSincero){
    console.log("Nat é a mais nova");
} else if (ageRenan < ageSincero){
    console.log("Renan é o mais novo");
}else {
    console.log("Sincero é o mais novo")
}
