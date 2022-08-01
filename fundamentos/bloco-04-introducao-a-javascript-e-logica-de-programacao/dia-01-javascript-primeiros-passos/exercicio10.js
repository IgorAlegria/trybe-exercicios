const valorVenda = 1000;
const valorCusto = 300;

let impostoSobreOCusto = valorCusto * 0.20;
let valorCustoTotal = valorCusto + impostoSobreOCusto;
let lucro;

if (valorVenda > 0 && valorCusto > 0 && impostoSobreOCusto > 0 && valorCustoTotal > 0){
    lucro = valorVenda - valorCustoTotal;
} else {
    console.log("Erro")
}
console.log(lucro)