// 1 Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
const notaTeste = 80;

//2 Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:
// Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
// Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
// Se a nota for menor que 60, imprima "Você foi reprovada(o)"
if (notaTeste >= 80) {
    console.log("Parabéns,você foi aprovada(o) !")
}else if (notaTeste < 80 && notaTeste >= 60){
    console.log("Você está lista de espera")
}else {
    console.log("Você foi reprovada(o)")
}

// 3 Crie uma estrutura condicional utilizando o if, else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.
// 4 Altere o valor da nota para verificar se as condições que você implementou funcionam;
