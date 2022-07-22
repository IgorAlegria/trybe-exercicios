let salary = 3000;
let inss;
let ir;

if (salary <= 1556.94){
   inss = salary * 0.08;
} else if (salary > 1556.94 && salary <= 2594.92){
    inss = salary * 0.09;
} else if (salary > 2594.92 && salary <= 5189,82){
    inss = salary * 0.11;
} else {
    inss = 570.88 
}    

let salarioInssDescontado = salary - inss;

console.log(salarioInssDescontado); 

if (salarioInssDescontado <= 1903.98){
    ir = 0;
 } else if (salarioInssDescontado > 1903.99 && salarioInssDescontado <= 2826.65){
    ir = (salarioInssDescontado * 0.075) - 124.80;
 } else if (salarioInssDescontado > 2826.65 && salarioInssDescontado <= 3751.05){
    ir = (salarioInssDescontado * 0.15) - 354.80;
 } else if (salarioInssDescontado > 3751.08 && salarioInssDescontado <= 4664.68){
    ir = (salarioInssDescontado * 0.225) - 636.13;
} else if (salarioInssDescontado > 2594.92 && salarioInssDescontado <= 4664.68){
    ir = (salarioInssDescontado * 0.275) - 869.36;
} 

let salarioLiquido = salarioInssDescontado - ir;

console.log('seu salário líquido é de R$ ' + salarioLiquido);