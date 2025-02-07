/*
  Uma higher-order function (função de alta ordem) é uma função que faz pelo menos uma 
  dessas coisas:

  ✅ Recebe uma ou mais funções como argumento
  ✅ Retorna uma função como resultado

  Ou seja, ela trabalha com outras funções de alguma forma!
*/

// function run(fn) {
//   fn();
// }

// function run(fn) {
//   return fn();
// }

function run(fn) {
  return `Result: ${fn()}`;
}

function sayHello() {
  console.log('Hello!!!');
}

// run(3); // TypeError: fn is not a function
// run(sayHello()); // TypeError: fn is not a function
run(sayHello); // passa a referência da função

run(function () {
  console.log('run!!!');
});

const result = run(Math.random);
console.log(result);
