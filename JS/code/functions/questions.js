// ? function declaration

function add(a, b) {
	console.log('declaration', a + b);
}

add(5, 6);

// ? function expression

const addition = function (num) {
	console.log('function expression: ', num + num);
};

addition(5);

// ? What are first calss function?
// * A function can be treated like a vraiable, they are called first class functions
// * functions can pass to anothet function

function square(num) {
	return num * num;
}

function displayed(fn) {
	console.log('first calss function: ', fn(5));
}

displayed(square); //* 25

// ? What is IIFE?
// * Immeadiate invoked function expressions

(function sum(num) {
	console.log('IIFE 1', num * num);
})(7); // * 49

// ? IIFE o/p based questions

(function (x) {
	return (function (y) {
		console.log('IIFE O/P: ', x); // 4
	})(2);
})(4);

// ? Functional Scope

var num1 = 20;
num2 = 30;
var name = 'Madhu';

function multiply() {
	console.log('FS multiply ; ', num1 * num2);
}

multiply();

// * Nested functions

function getScore() {
	var num1 = 2; // * Shadow Variable
	num2 = 3; // * Shadow Variable

	function add() {
		return name + ' scored: ' + (num1 + num2);
	}

	return add();
}

console.log(getScore());

// ?7 Function Scope O/P based

// for (let i = 0; i < 5; i++) {
// 	setTimeout(() => {
// 		console.log(i); //* 0,1,2,3,4
// 	}, i * 1000);
// }

// for (var i = 0; i < 5; i++) {
// 	setTimeout(() => {
// 		console.log(i); //* 5,5,5,5,5
// 	}, i * 1000);
// }

// ?8 function hoisting O/P
squareHoist(589);

function squareHoist(num) {
	console.log('hoisting: ', num);
}

console.log('hoisting', hx); //undefined

var hx = 5;

squareHoist2();

function squareHoist2(num) {
	console.log('hoisting2', hx); //undefined
	var hx = 5;
}

// ?9 function hoisting O/P

var x = 21;

var fun = function () {
	console.log('hoistOP: ', x);
	var x = 35;
};

fun();

// ?10 Params vs Arguments

function pa(num) {
	// params pa(num)
	console.log(num);
}

pa(5); // arguments

function paspread(...num) {
	//* params paspread(num)
	console.log("paspread", num);
}
const arrayData = [2,5]
paspread(...arrayData); //* arguments

// const fn = function(a,...numbers,x,y){
// console.log(x,y) //! Rest parameter must be last formal parameter

const fn = function(a,x,y, ...numbers){
    console.log(x,y, numbers) //* 2 3 [ 5, 6, 9, 8 ]
}

fn(1,2,3,5,6,9,8)

// ?12 Callback Function

// * setTimeout, setInterval, map, filter, reduce, eventListener

// * document.getElementById("root").addEventListener("click", () => {
//     // callback function
// })

// ?13 Arrow function vs Regular Function

//* 1 Syntax

function syntax(num){
    return num * num
}
const syntax2 = (num) => {
    return num * num
}

//* 2 Implicit return keyword
const syntax3 = (num) =>  num * num

//* 3 Arguments

function arguments(){
    console.log("reg", arguments)
}

arguments(2,5,6)

const arguMap = () => {
    console.log("map", arguments) //! arguments not defined
}

arguMap(3,4,7) 

//?14 this keyword

const user = {
    name: "Madhu",
    rc1: () => {
        console.log("Hellow: ", this.name) //! undefined
    },
    rc2: function(){
        console.log("Hellow: ", this.name) //* refer user object
    }
}

user.rc1();
user.rc2()
