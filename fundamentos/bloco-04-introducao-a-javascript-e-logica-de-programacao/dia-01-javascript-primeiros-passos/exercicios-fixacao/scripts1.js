// 1 Crie uma constante chamada myName e atribua a ela o seu nome.
const myName = "Igor";
// 2 Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
const birthCity = "São Paulo";
// 3 Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu.
let birthYear = "1995";
// 4 Utilize o console.log() para imprimir as constantes e variáveis que você criou.
console.log(myName);
console.log(birthCity);
console.log(birthYear);
// 5 Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
birthYear = 2030;

console.log(myName);
console.log(birthCity);
console.log(birthYear);
// Mudou o conteúdo dentro da variante pois a variante let permite trocar o conteúdo.

// 6 Altere o valor atribuído à constante birthCity. Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? 🤔
birthCity = "Guarulhos";

console.log(birthCity);
//  Não funcionou, pq a variavel const não permite mudar o seu conteúdo.