let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let higherName = names[0];

function higherNames(nome) {
    for (let index = 0; index < nome.length; index += 1){
      if(higherName.length < nome[index].length){
        higherName = nome[index];
      }
    };
    return higherName;
}

console.log(higherNames(names));