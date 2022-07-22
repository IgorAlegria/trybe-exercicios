const notaTeste = 70;
// 1 Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada', 'lista' ou 'reprovada'; 
let resultadoTeste;

switch (notaTeste) {
    case 100:
    case 90:
    case 80:
    resultadoTeste = "Parabéns,você foi aprovada(o) !";
        break;
    case 70:    
    case 60:
    resultadoTeste = "Você está lista de espera";
        break;
    case 50:
    case 40:
    case 30:
    case 20:
    case 10:
        resultadoTeste = "Você foi reprovada(o)";
        break;
    default:
        resultadoTeste = "Não se aplica";
}
console.log(resultadoTeste);