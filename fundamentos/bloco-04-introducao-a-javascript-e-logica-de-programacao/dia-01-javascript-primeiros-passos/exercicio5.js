let anguloA = 60;
let anguloB = 60;
let anguloC = 60;

let somaAngulo = anguloA + anguloB + anguloC;

if (somaAngulo) {
   if (somaAngulo === 180) {
    console.log(true);
} else {
    console.log("false");
};
}else{
    console.log("Erro: ângulo inválido");
}