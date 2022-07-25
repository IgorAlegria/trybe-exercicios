let num = [2, 4, 6, 7, 10, 0, -3];
let lowerNumber = 0;

function lowerNum(numeros) {
    for (let index = 0; index < numeros.length; index += 1){
      if(numeros[lowerNumber] > numeros[index]){
        lowerNumber = index;
      }
    };
    return lowerNumber;
}

console.log(lowerNum(num));