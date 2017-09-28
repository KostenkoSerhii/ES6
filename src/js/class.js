export default class Task{
	constructor(title = Task.getDefaultTitle()){
		this.title = title;
		this._done = false;
		Task.count += 1;
		console.log("создание задачи");
	}
	get done(){
		return this._done === true ? 'выполнена': 'не выполнена'
	}
	set done(value){
		if(value !== undefined && typeof value === "boolean"){
			this._done = value;
		}else{
			console.log('ошибка мы принимаем true/false');
		}
	}
	complete(){
		this.done = true;
		console.log(`ЗАдача '${this.title}' выполнена`);
	}
	static getDefaultTitle(){
		return "Задача"
	}
}