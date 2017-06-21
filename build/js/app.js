/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction sayHello() {\n    if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {\n        var args = ['\\n %c Made with ❤️ by Rivercode %c http://www.riverco.de/ %c %c 🐳 \\n\\n', 'border: 1px solid #000;color: #000; background: #fff001; padding:5px 0;', 'color: #fff; background: #1c1c1c; padding:5px 0;border: 1px solid #000;', 'background: #fff; padding:5px 0;', 'color: #b0976d; background: #fff; padding:5px 0;'];\n        window.console.log.apply(console, args);\n    } else if (window.console) {\n        window.console.log('Made with love ❤️ Riverco.de - http://www.riverco.de/  ❤️');\n    }\n}\nmodule.exports = sayHello;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvbGliL3NheUhlbGxvLmpzP2E2MmQiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc2F5SGVsbG8oKSB7XG4gICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdjaHJvbWUnKSA+IC0xKSB7XG4gICAgICAgIHZhciBhcmdzID0gWydcXG4gJWMgTWFkZSB3aXRoIOKdpO+4jyBieSBSaXZlcmNvZGUgJWMgaHR0cDovL3d3dy5yaXZlcmNvLmRlLyAlYyAlYyDwn5CzIFxcblxcbicsICdib3JkZXI6IDFweCBzb2xpZCAjMDAwO2NvbG9yOiAjMDAwOyBiYWNrZ3JvdW5kOiAjZmZmMDAxOyBwYWRkaW5nOjVweCAwOycsICdjb2xvcjogI2ZmZjsgYmFja2dyb3VuZDogIzFjMWMxYzsgcGFkZGluZzo1cHggMDtib3JkZXI6IDFweCBzb2xpZCAjMDAwOycsICdiYWNrZ3JvdW5kOiAjZmZmOyBwYWRkaW5nOjVweCAwOycsICdjb2xvcjogI2IwOTc2ZDsgYmFja2dyb3VuZDogI2ZmZjsgcGFkZGluZzo1cHggMDsnXTtcbiAgICAgICAgd2luZG93LmNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuICAgIH0gZWxzZSBpZiAod2luZG93LmNvbnNvbGUpIHtcbiAgICAgICAgd2luZG93LmNvbnNvbGUubG9nKCdNYWRlIHdpdGggbG92ZSDinaTvuI8gUml2ZXJjby5kZSAtIGh0dHA6Ly93d3cucml2ZXJjby5kZS8gIOKdpO+4jycpO1xuICAgIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2F5SGVsbG87XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9saWIvc2F5SGVsbG8uanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _sayHello = __webpack_require__(0);\n\nvar _sayHello2 = _interopRequireDefault(_sayHello);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _sayHello2.default)();\n\n//let staticlangs = ['C', 'C++', 'Java'];\n//let dynamicLangs = ['JS', 'PHP', 'Ruby'];\n//\n//let langs = [...staticlangs ,'C#',...dynamicLangs, 'Python'];\n//// console.log(langs);\n//\n//function add(x, y, z) {\n//\tconsole.log(x + y + z);\n//\t// body...\n//}\n//let numbers = [1, 2, 3];\n////add(...numbers);\n//\n//function createEmail(to, from, subject, message) {\n//\tconsole.log(`\n//\t\tTo: ${to}\n//\t\tFrom: ${from}\n//\t\tSubject: ${subject}\n//\t\t`);\n//}\n////createEmail(\"sdfs\", \"dsf\", \"dfdsfs\");\n//function greet(str) {\n//\tconsole.log(upperName`hello ${str}`);\n//}\n////greet(\"Bill\")\n//\n//function upperName(literals, value) {\n//\treturn literals[0] + value.toUpperCase();\n//}\n//\n//\n//\n//function greet2(greeting = \"hello\", name = 'friend') {\n//\tconsole.log(`${greeting} ${name}`);\n//}\n////greet2(\"hi\", \"Bill\")\n////greet2(\"hi\")\n////greet2()\n//\n//function sum(...values) {\n//\tlet sum = 0;\n//\tvalues.forEach(function(value){\n//\t\tsum += value;\n//\t})\n//\tconsole.log(sum);\n//}\n////sum(5,6,7,8)\n//\nvar firstName = \"Bill\",\n    lastName = \"Gates\",\n    email = \"dsfsdf@dsfdsfs.dsfs\";\n\nvar person = {\n\n\tfirstName: firstName,\n\tlastName: lastName,\n\temail: email,\n\tsayHello: function sayHello() {\n\t\tconsole.log(\"sdfds \" + lastName);\n\t},\n\n\tget fullName() {\n\t\treturn this.firstName + \" \" + this.lastName;\n\t}\n};\n//Object.defineProperty(person, \"fullName\", {\n//\tget: function(){\n//\t\treturn this.firstName + \" \" + this.lastName\n//\t}\n//});\nconsole.log(person);\n//person.sayHello()\n\n//function createCar(prop, value) {\n//\treturn {\n//\t\t[prop]: value,\n//\t\t[\"\"]\n//\t}\n//}\n//console.log(createCar(\"vim\", 1));\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNheUhlbGxvIGZyb20gJy4vbGliL3NheUhlbGxvLmpzJztcblxuc2F5SGVsbG8oKTtcblxuLy9sZXQgc3RhdGljbGFuZ3MgPSBbJ0MnLCAnQysrJywgJ0phdmEnXTtcbi8vbGV0IGR5bmFtaWNMYW5ncyA9IFsnSlMnLCAnUEhQJywgJ1J1YnknXTtcbi8vXG4vL2xldCBsYW5ncyA9IFsuLi5zdGF0aWNsYW5ncyAsJ0MjJywuLi5keW5hbWljTGFuZ3MsICdQeXRob24nXTtcbi8vLy8gY29uc29sZS5sb2cobGFuZ3MpO1xuLy9cbi8vZnVuY3Rpb24gYWRkKHgsIHksIHopIHtcbi8vXHRjb25zb2xlLmxvZyh4ICsgeSArIHopO1xuLy9cdC8vIGJvZHkuLi5cbi8vfVxuLy9sZXQgbnVtYmVycyA9IFsxLCAyLCAzXTtcbi8vLy9hZGQoLi4ubnVtYmVycyk7XG4vL1xuLy9mdW5jdGlvbiBjcmVhdGVFbWFpbCh0bywgZnJvbSwgc3ViamVjdCwgbWVzc2FnZSkge1xuLy9cdGNvbnNvbGUubG9nKGBcbi8vXHRcdFRvOiAke3RvfVxuLy9cdFx0RnJvbTogJHtmcm9tfVxuLy9cdFx0U3ViamVjdDogJHtzdWJqZWN0fVxuLy9cdFx0YCk7XG4vL31cbi8vLy9jcmVhdGVFbWFpbChcInNkZnNcIiwgXCJkc2ZcIiwgXCJkZmRzZnNcIik7XG4vL2Z1bmN0aW9uIGdyZWV0KHN0cikge1xuLy9cdGNvbnNvbGUubG9nKHVwcGVyTmFtZWBoZWxsbyAke3N0cn1gKTtcbi8vfVxuLy8vL2dyZWV0KFwiQmlsbFwiKVxuLy9cbi8vZnVuY3Rpb24gdXBwZXJOYW1lKGxpdGVyYWxzLCB2YWx1ZSkge1xuLy9cdHJldHVybiBsaXRlcmFsc1swXSArIHZhbHVlLnRvVXBwZXJDYXNlKCk7XG4vL31cbi8vXG4vL1xuLy9cbi8vZnVuY3Rpb24gZ3JlZXQyKGdyZWV0aW5nID0gXCJoZWxsb1wiLCBuYW1lID0gJ2ZyaWVuZCcpIHtcbi8vXHRjb25zb2xlLmxvZyhgJHtncmVldGluZ30gJHtuYW1lfWApO1xuLy99XG4vLy8vZ3JlZXQyKFwiaGlcIiwgXCJCaWxsXCIpXG4vLy8vZ3JlZXQyKFwiaGlcIilcbi8vLy9ncmVldDIoKVxuLy9cbi8vZnVuY3Rpb24gc3VtKC4uLnZhbHVlcykge1xuLy9cdGxldCBzdW0gPSAwO1xuLy9cdHZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKXtcbi8vXHRcdHN1bSArPSB2YWx1ZTtcbi8vXHR9KVxuLy9cdGNvbnNvbGUubG9nKHN1bSk7XG4vL31cbi8vLy9zdW0oNSw2LDcsOClcbi8vXG5sZXQgZmlyc3ROYW1lID0gXCJCaWxsXCIsXG5sYXN0TmFtZSA9IFwiR2F0ZXNcIixcbmVtYWlsID0gXCJkc2ZzZGZAZHNmZHNmcy5kc2ZzXCI7XG5cbmxldCBwZXJzb24gPSB7XG5cblx0Zmlyc3ROYW1lLFxuXHRsYXN0TmFtZSxcblx0ZW1haWwsXG5cdHNheUhlbGxvKCkge1xuXHRcdGNvbnNvbGUubG9nKGBzZGZkcyAke2xhc3ROYW1lfWApO1xuXHR9LFxuXHRcdGdldCBmdWxsTmFtZSgpe1xuXHRcdHJldHVybiB0aGlzLmZpcnN0TmFtZSArIFwiIFwiICsgdGhpcy5sYXN0TmFtZVxuXHR9XG59O1xuLy9PYmplY3QuZGVmaW5lUHJvcGVydHkocGVyc29uLCBcImZ1bGxOYW1lXCIsIHtcbi8vXHRnZXQ6IGZ1bmN0aW9uKCl7XG4vL1x0XHRyZXR1cm4gdGhpcy5maXJzdE5hbWUgKyBcIiBcIiArIHRoaXMubGFzdE5hbWVcbi8vXHR9XG4vL30pO1xuY29uc29sZS5sb2cocGVyc29uKTtcbi8vcGVyc29uLnNheUhlbGxvKClcblxuLy9mdW5jdGlvbiBjcmVhdGVDYXIocHJvcCwgdmFsdWUpIHtcbi8vXHRyZXR1cm4ge1xuLy9cdFx0W3Byb3BdOiB2YWx1ZSxcbi8vXHRcdFtcIlwiXVxuLy9cdH1cbi8vfVxuLy9jb25zb2xlLmxvZyhjcmVhdGVDYXIoXCJ2aW1cIiwgMSkpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvYXBwLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBVkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);