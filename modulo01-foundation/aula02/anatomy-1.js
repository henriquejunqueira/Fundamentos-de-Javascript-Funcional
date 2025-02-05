// Function declaration

function sayHello() {
  console.log('Hello!');
}

sayHello();

// let x = sayHello();
// console.log(x); // undefined

function sayHelloTo(name) {
  //   console.log('Hello ' + name);
  console.log(`Hello ${name}`);
}

sayHelloTo('Henrique');
// sayHelloTo(); // Hello undefined pois não foi passado o name

function returnHi() {
  return 'Hi!';
}

// returnHi(); // dessa forma nada é exibido

// let greeting = returnHi();
// var greeting = returnHi();
const greeting = returnHi();
console.log(greeting); // dessa forma exibe o valor retornado da função
console.log(returnHi());

function returnHiTo(name) {
  return `Hi ${name}!`;
}

console.log(returnHi('John'));
