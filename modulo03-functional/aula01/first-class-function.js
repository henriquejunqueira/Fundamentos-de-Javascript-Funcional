/*
    Uma first-class function (ou função de primeira classe) em JavaScript significa que as funções são 
    tratadas como valores. Isso quer dizer que podemos:

    ✅ Guardar funções em variáveis
    ✅ Passar funções como argumento para outras funções
    ✅ Retornar funções dentro de funções

    Ou seja, em JavaScript, funções são como qualquer outro valor (como strings ou números) e podem ser 
    manipuladas livremente! 🚀
*/

let x = 10;
const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = (x, y) => x * y;

const divide = (x, y) => x / y;

console.log(add(10, 20));
console.log(subtract(10, 20));
console.log(multiply(10, 20));
console.log(divide(10, 20));
