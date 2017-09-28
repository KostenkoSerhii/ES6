// import sayHello from './lib/sayHello.js';
// import Task from './class';
// import myFunc from "./exportFunc";
// import observer from "./observer";
// observer()
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
//let firstName = "Bill",
//lastName = "Gates",
//email = "dsfsdf@dsfdsfs.dsfs";
//
//let person = {
//
//	firstName,
//	lastName,
//	email,
//	sayHello() {
//		console.log(`sdfds ${lastName}`);
//	},
//		get fullName(){
//		return this.firstName + " " + this.lastName
//	}
//};
//Object.defineProperty(person, "fullName", {
//	get: function(){
//		return this.firstName + " " + this.lastName
//	}
//});
//console.log(person);
//person.sayHello()

//function createCar(prop, value) {
//	return {
//		[prop]: value,
//		[""]
//	}
//}
//console.log(createCar("vim", 1));


// classes

//Task.count = 0;
//let task  = new Task("Убрать комнату")
//console.log(task.done, task._done);
//task.complete();
//console.log(task.done, task._done);




// class ObserverSubject{
// 	constructor(){
// 		this.observers = []
// 	}
// 	sendMessage(msg){
// 		for(var i = 0; i < this.observers.length;  i++){
// 			this.observers[i].notify(msg)
// 		}
// 	}
// 	addObserver(observer){
// 		this.observers.push(observer);
// 	}
// };

// class Observer{
// 	constructor(bihavior){
// 		this.bihavior = bihavior
// 	}
// 	notify(msg){
// 		this.bihavior(msg)
// 	}
// };

// let observable = new ObserverSubject();
// let obs1 = new Observer(function(msg){console.log(msg)});
// let obs2 = new Observer(function(msg){alert(msg)});

// observable.addObserver(obs1);
// observable.addObserver(obs2);




// setTimeout(function(){observable.sendMessage('время')}, 3000 )
// function Observable(){
// 	let observers = [];
// 	this.sendMessage = function(msg){
// 		for(var i = 0; i < observers.length;  i++){
// 			observers[i].notify(msg)
// 		}
// 	};

// 	this.addObserver = function(observer){
// 		observers.push(observer);
// 	};

// };
// function Observer (bihavior){
// 	this.notify = function(msg){
// 		bihavior(msg)
// 	}
// };

class ObserverSubject{
	constructor(){
		this.observers = []
	}
	sendMessage(msg){
		for(var i = 0; i < this.observers.length;  i++){
			this.observers[i].notify(msg)
		}
	}
	addObserver(observer){
		this.observers.push(observer);
	}
};

class Observer{
	constructor(bihavior){
		this.bihavior = bihavior
	}
	notify(msg){
		this.bihavior(msg)
	}
};

let observable = new ObserverSubject();

let basketObs = new Observer(function(id){
	$(".basket__products-list").append(
		$("<li></li>")
		.addClass("basket__product")
		.text("Товар " + id)
		)
});
let modalObs = new Observer(function(id){
	let msg = `товар ${id} добавлен в корзину!`;
	$(".buy__message").text(msg);
	$(".buy").removeClass("buy--hide");
	setTimeout(() => {
		$(".buy").addClass("buy--hide");
	}, 2000)
});

let serverObs = new Observer(function(id){
console.log(`id ${id}`);
});


observable.addObserver(basketObs);
observable.addObserver(modalObs);
observable.addObserver(serverObs);

$(".product").on("click", function(){
	let id = $(this).attr("data-id");
	observable.sendMessage(id)
})