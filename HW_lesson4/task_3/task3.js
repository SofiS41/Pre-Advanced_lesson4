class CoffeeMaker{
	constructor(time, type){
		this.timeMake = time;
		this.typeOfMachine = type;
	}
	on(){
		console.log("The machine are waking up. Plese, waite 3 seconds");
	}
	off(){
		console.log("Your coffee is ready. Have a nice day :)\n\n");
	}
	making(){
		console.log(`The ${this.typeOfMachine} maker are making your coffee. Please wait ... ${this.timeMake}s`);
		setTimeout(()=>{ this.off(); }, this.timeMake*1000);
	}
}

class Drip extends CoffeeMaker{
	constructor(time, type){
		super(time, type);
	}
	choose(){
		console.log("You choose drip maker");
	}
}
class Carob extends CoffeeMaker{
	constructor(time, type){
		super(time, type);
	}
	choose(){
		console.log("You choose carob maker");
	}
}
class CoffeeMachine extends CoffeeMaker{
	constructor(time, type){
		super(time, type);
	}
	choose(){
		console.log("You choose coffee machine maker");
	}
}

let drip = new Drip(8, 'drip'),
	carob = new Carob(11, 'carob'),
	coffeeMachine = new CoffeeMachine(4, 'coffee machine');


function processing(type){
	type.choose();
	type.on();
	setTimeout(()=>{
		type.making();
	}, 3000)
}

let types = document.querySelector('.types');

types.addEventListener('click', (e)=>{
	if(e.target.classList.contains('type')){
		if(e.target.dataset.type == 'drip') processing(drip);
		else if(e.target.dataset.type == 'carob')	processing(carob);
		else if(e.target.dataset.type == 'coffee-machine')	processing(coffeeMachine);
	}
})