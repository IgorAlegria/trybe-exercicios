let todosNumeros = [2, 3, 2, 5, 8, 2, 3];

function maisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
  
    for (let index = 0; index < numeros.length; index += 1) {
      let verificaNumero = numeros[index];
      for (let index2 = 0; index2 < numeros.length; index2 += 1) {
        if (verificaNumero === numeros[index2]) {
          contNumero += 1;
        }
      }
      if (contNumero > contRepetido) {
        contRepetido = contNumero;
        indexNumeroRepetido = index;
      }
      contNumero = 0;
    }
  
    return numeros[indexNumeroRepetido];
  }
  
  console.log(maisRepetido(todosNumeros)); 