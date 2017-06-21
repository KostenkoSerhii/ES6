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
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _sayHello = __webpack_require__(0);\n\nvar _sayHello2 = _interopRequireDefault(_sayHello);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n(0, _sayHello2.default)();\n\n//let staticlangs = ['C', 'C++', 'Java'];\n//let dynamicLangs = ['JS', 'PHP', 'Ruby'];\n//\n//let langs = [...staticlangs ,'C#',...dynamicLangs, 'Python'];\n//// console.log(langs);\n//\n//function add(x, y, z) {\n//\tconsole.log(x + y + z);\n//\t// body...\n//}\n//let numbers = [1, 2, 3];\n////add(...numbers);\n//\n//function createEmail(to, from, subject, message) {\n//\tconsole.log(`\n//\t\tTo: ${to}\n//\t\tFrom: ${from}\n//\t\tSubject: ${subject}\n//\t\t`);\n//}\n////createEmail(\"sdfs\", \"dsf\", \"dfdsfs\");\n//function greet(str) {\n//\tconsole.log(upperName`hello ${str}`);\n//}\n////greet(\"Bill\")\n//\n//function upperName(literals, value) {\n//\treturn literals[0] + value.toUpperCase();\n//}\n//\n//\n//\n//function greet2(greeting = \"hello\", name = 'friend') {\n//\tconsole.log(`${greeting} ${name}`);\n//}\n////greet2(\"hi\", \"Bill\")\n////greet2(\"hi\")\n////greet2()\n//\n//function sum(...values) {\n//\tlet sum = 0;\n//\tvalues.forEach(function(value){\n//\t\tsum += value;\n//\t})\n//\tconsole.log(sum);\n//}\n////sum(5,6,7,8)\n//\n//let firstName = \"Bill\",\n//lastName = \"Gates\",\n//email = \"dsfsdf@dsfdsfs.dsfs\";\n//\n//let person = {\n//\n//\tfirstName,\n//\tlastName,\n//\temail,\n//\tsayHello() {\n//\t\tconsole.log(`sdfds ${lastName}`);\n//\t},\n//\t\tget fullName(){\n//\t\treturn this.firstName + \" \" + this.lastName\n//\t}\n//};\n//Object.defineProperty(person, \"fullName\", {\n//\tget: function(){\n//\t\treturn this.firstName + \" \" + this.lastName\n//\t}\n//});\n//console.log(person);\n//person.sayHello()\n\n//function createCar(prop, value) {\n//\treturn {\n//\t\t[prop]: value,\n//\t\t[\"\"]\n//\t}\n//}\n//console.log(createCar(\"vim\", 1));\n\n\n// classes\n\nvar Task = function () {\n\tfunction Task() {\n\t\tvar title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Task.getDefaultTitle();\n\n\t\t_classCallCheck(this, Task);\n\n\t\tthis.title = title;\n\t\tthis._done = false;\n\t\tTask.count += 1;\n\t\tconsole.log(\"создание задачи\");\n\t}\n\n\t_createClass(Task, [{\n\t\tkey: 'complete',\n\t\tvalue: function complete() {\n\t\t\tthis.done = true;\n\t\t\tconsole.log('\\u0417\\u0410\\u0434\\u0430\\u0447\\u0430 \\'' + this.title + '\\' \\u0432\\u044B\\u043F\\u043E\\u043B\\u043D\\u0435\\u043D\\u0430');\n\t\t}\n\t}, {\n\t\tkey: 'done',\n\t\tget: function get() {\n\t\t\treturn this._done === true ? 'выполнена' : 'не выполнена';\n\t\t},\n\t\tset: function set(value) {\n\t\t\tif (value !== undefined && typeof value === \"boolean\") {\n\t\t\t\tthis._done = value;\n\t\t\t} else {\n\t\t\t\tconsole.log('ошибка мы принимаем true/false');\n\t\t\t}\n\t\t}\n\t}], [{\n\t\tkey: 'getDefaultTitle',\n\t\tvalue: function getDefaultTitle() {\n\t\t\treturn \"Задача\";\n\t\t}\n\t}]);\n\n\treturn Task;\n}();\n\nTask.count = 0;\nvar task = new Task(\"Убрать комнату\");\nconsole.log(task.done, task._done);\ntask.complete();\nconsole.log(task.done, task._done);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNheUhlbGxvIGZyb20gJy4vbGliL3NheUhlbGxvLmpzJztcbnNheUhlbGxvKCk7XG5cbi8vbGV0IHN0YXRpY2xhbmdzID0gWydDJywgJ0MrKycsICdKYXZhJ107XG4vL2xldCBkeW5hbWljTGFuZ3MgPSBbJ0pTJywgJ1BIUCcsICdSdWJ5J107XG4vL1xuLy9sZXQgbGFuZ3MgPSBbLi4uc3RhdGljbGFuZ3MgLCdDIycsLi4uZHluYW1pY0xhbmdzLCAnUHl0aG9uJ107XG4vLy8vIGNvbnNvbGUubG9nKGxhbmdzKTtcbi8vXG4vL2Z1bmN0aW9uIGFkZCh4LCB5LCB6KSB7XG4vL1x0Y29uc29sZS5sb2coeCArIHkgKyB6KTtcbi8vXHQvLyBib2R5Li4uXG4vL31cbi8vbGV0IG51bWJlcnMgPSBbMSwgMiwgM107XG4vLy8vYWRkKC4uLm51bWJlcnMpO1xuLy9cbi8vZnVuY3Rpb24gY3JlYXRlRW1haWwodG8sIGZyb20sIHN1YmplY3QsIG1lc3NhZ2UpIHtcbi8vXHRjb25zb2xlLmxvZyhgXG4vL1x0XHRUbzogJHt0b31cbi8vXHRcdEZyb206ICR7ZnJvbX1cbi8vXHRcdFN1YmplY3Q6ICR7c3ViamVjdH1cbi8vXHRcdGApO1xuLy99XG4vLy8vY3JlYXRlRW1haWwoXCJzZGZzXCIsIFwiZHNmXCIsIFwiZGZkc2ZzXCIpO1xuLy9mdW5jdGlvbiBncmVldChzdHIpIHtcbi8vXHRjb25zb2xlLmxvZyh1cHBlck5hbWVgaGVsbG8gJHtzdHJ9YCk7XG4vL31cbi8vLy9ncmVldChcIkJpbGxcIilcbi8vXG4vL2Z1bmN0aW9uIHVwcGVyTmFtZShsaXRlcmFscywgdmFsdWUpIHtcbi8vXHRyZXR1cm4gbGl0ZXJhbHNbMF0gKyB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xuLy99XG4vL1xuLy9cbi8vXG4vL2Z1bmN0aW9uIGdyZWV0MihncmVldGluZyA9IFwiaGVsbG9cIiwgbmFtZSA9ICdmcmllbmQnKSB7XG4vL1x0Y29uc29sZS5sb2coYCR7Z3JlZXRpbmd9ICR7bmFtZX1gKTtcbi8vfVxuLy8vL2dyZWV0MihcImhpXCIsIFwiQmlsbFwiKVxuLy8vL2dyZWV0MihcImhpXCIpXG4vLy8vZ3JlZXQyKClcbi8vXG4vL2Z1bmN0aW9uIHN1bSguLi52YWx1ZXMpIHtcbi8vXHRsZXQgc3VtID0gMDtcbi8vXHR2YWx1ZXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSl7XG4vL1x0XHRzdW0gKz0gdmFsdWU7XG4vL1x0fSlcbi8vXHRjb25zb2xlLmxvZyhzdW0pO1xuLy99XG4vLy8vc3VtKDUsNiw3LDgpXG4vL1xuLy9sZXQgZmlyc3ROYW1lID0gXCJCaWxsXCIsXG4vL2xhc3ROYW1lID0gXCJHYXRlc1wiLFxuLy9lbWFpbCA9IFwiZHNmc2RmQGRzZmRzZnMuZHNmc1wiO1xuLy9cbi8vbGV0IHBlcnNvbiA9IHtcbi8vXG4vL1x0Zmlyc3ROYW1lLFxuLy9cdGxhc3ROYW1lLFxuLy9cdGVtYWlsLFxuLy9cdHNheUhlbGxvKCkge1xuLy9cdFx0Y29uc29sZS5sb2coYHNkZmRzICR7bGFzdE5hbWV9YCk7XG4vL1x0fSxcbi8vXHRcdGdldCBmdWxsTmFtZSgpe1xuLy9cdFx0cmV0dXJuIHRoaXMuZmlyc3ROYW1lICsgXCIgXCIgKyB0aGlzLmxhc3ROYW1lXG4vL1x0fVxuLy99O1xuLy9PYmplY3QuZGVmaW5lUHJvcGVydHkocGVyc29uLCBcImZ1bGxOYW1lXCIsIHtcbi8vXHRnZXQ6IGZ1bmN0aW9uKCl7XG4vL1x0XHRyZXR1cm4gdGhpcy5maXJzdE5hbWUgKyBcIiBcIiArIHRoaXMubGFzdE5hbWVcbi8vXHR9XG4vL30pO1xuLy9jb25zb2xlLmxvZyhwZXJzb24pO1xuLy9wZXJzb24uc2F5SGVsbG8oKVxuXG4vL2Z1bmN0aW9uIGNyZWF0ZUNhcihwcm9wLCB2YWx1ZSkge1xuLy9cdHJldHVybiB7XG4vL1x0XHRbcHJvcF06IHZhbHVlLFxuLy9cdFx0W1wiXCJdXG4vL1x0fVxuLy99XG4vL2NvbnNvbGUubG9nKGNyZWF0ZUNhcihcInZpbVwiLCAxKSk7XG5cblxuLy8gY2xhc3Nlc1xuY2xhc3MgVGFza3tcblx0Y29uc3RydWN0b3IodGl0bGUgPSBUYXNrLmdldERlZmF1bHRUaXRsZSgpKXtcblx0XHR0aGlzLnRpdGxlID0gdGl0bGU7XG5cdFx0dGhpcy5fZG9uZSA9IGZhbHNlO1xuXHRcdFRhc2suY291bnQgKz0gMTtcblx0XHRjb25zb2xlLmxvZyhcItGB0L7Qt9C00LDQvdC40LUg0LfQsNC00LDRh9C4XCIpO1xuXHR9XG5cdGdldCBkb25lKCl7XG5cdFx0cmV0dXJuIHRoaXMuX2RvbmUgPT09IHRydWUgPyAn0LLRi9C/0L7Qu9C90LXQvdCwJzogJ9C90LUg0LLRi9C/0L7Qu9C90LXQvdCwJ1xuXHR9XG5cdHNldCBkb25lKHZhbHVlKXtcblx0XHRpZih2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpe1xuXHRcdFx0dGhpcy5fZG9uZSA9IHZhbHVlO1xuXHRcdH1lbHNle1xuXHRcdFx0Y29uc29sZS5sb2coJ9C+0YjQuNCx0LrQsCDQvNGLINC/0YDQuNC90LjQvNCw0LXQvCB0cnVlL2ZhbHNlJyk7XG5cdFx0fVxuXHR9XG5cdGNvbXBsZXRlKCl7XG5cdFx0dGhpcy5kb25lID0gdHJ1ZTtcblx0XHRjb25zb2xlLmxvZyhg0JfQkNC00LDRh9CwICcke3RoaXMudGl0bGV9JyDQstGL0L/QvtC70L3QtdC90LBgKTtcblx0fVxuXHRzdGF0aWMgZ2V0RGVmYXVsdFRpdGxlKCl7XG5cdFx0cmV0dXJuIFwi0JfQsNC00LDRh9CwXCJcblx0fVxufVxuVGFzay5jb3VudCA9IDA7XG5sZXQgdGFzayAgPSBuZXcgVGFzayhcItCj0LHRgNCw0YLRjCDQutC+0LzQvdCw0YLRg1wiKVxuY29uc29sZS5sb2codGFzay5kb25lLCB0YXNrLl9kb25lKTtcbnRhc2suY29tcGxldGUoKTtcbmNvbnNvbGUubG9nKHRhc2suZG9uZSwgdGFzay5fZG9uZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2FwcC5qcyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7OztBQWJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFLQTtBQUNBO0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);