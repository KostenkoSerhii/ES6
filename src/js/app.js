import sayHello from './lib/sayHello.js';

sayHello();

//let staticlangs = ['C', 'C++', 'Java'];
//let dynamicLangs = ['JS', 'PHP', 'Ruby'];
//
//let langs = [...staticlangs ,'C#',...dynamicLangs, 'Python'];
//// console.log(langs);
//
//function add(x, y, z) {
//	console.log(x + y + z);
//	// body...
//}
//let numbers = [1, 2, 3];
////add(...numbers);
//
//function createEmail(to, from, subject, message) {
//	console.log(`
//		To: ${to}
//		From: ${from}
//		Subject: ${subject}
//		`);
//}
////createEmail("sdfs", "dsf", "dfdsfs");
//function greet(str) {
//	console.log(upperName`hello ${str}`);
//}
////greet("Bill")
//
//function upperName(literals, value) {
//	return literals[0] + value.toUpperCase();
//}
//
//
//
//function greet2(greeting = "hello", name = 'friend') {
//	console.log(`${greeting} ${name}`);
//}
////greet2("hi", "Bill")
////greet2("hi")
////greet2()
//
//function sum(...values) {
//	let sum = 0;
//	values.forEach(function(value){
//		sum += value;
//	})
//	console.log(sum);
//}
////sum(5,6,7,8)
//
let firstName = "Bill",
lastName = "Gates",
email = "dsfsdf@dsfdsfs.dsfs";

let person = {

	firstName,
	lastName,
	email,
	sayHello() {
		console.log(`sdfds ${lastName}`);
	},
		get fullName(){
		return this.firstName + " " + this.lastName
	}
};
//Object.defineProperty(person, "fullName", {
//	get: function(){
//		return this.firstName + " " + this.lastName
//	}
//});
console.log(person);
//person.sayHello()

//function createCar(prop, value) {
//	return {
//		[prop]: value,
//		[""]
//	}
//}
//console.log(createCar("vim", 1));