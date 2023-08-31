var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Lê os valores do número do funcionário, horas trabalhadas e valor por hora
var numeroFuncionario = parseInt(lines[0]);
var horasTrabalhadas = parseInt(lines[1]);
var valorPorHora = parseFloat(lines[2]);

// Calcula o salário do funcionário
var salario = horasTrabalhadas * valorPorHora;

// Imprime o número e o salário do funcionário formatados
console.log("NUMBER = " + numeroFuncionario);
console.log("SALARY = U$ " + salario.toFixed(2));
