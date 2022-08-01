let num = [2, 3, 6, 7, 10, 1];
let higherNumber = 0;

function higherNum(numeros) {
    for (let index = 0; index < numeros.length; index += 1){
      if(numeros[higherNumber] < numeros[index]){
        higherNumber = index;
      }
    };
    return higherNumber;
}

console.log(higherNum(num));