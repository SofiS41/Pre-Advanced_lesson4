class Worker {
	constructor(fname, sname, rate, days){
		this.firstName = fname;
		this.secondName = sname;
		this.rate = rate;
		this.days = days
	}
	getSalary(){
		return this.rate * this.days;
	}
}

const worker1 = new Worker('Василь', 'Пилипчук', 10, 24);
const worker2 = new Worker('Валерій', 'Міладзе', 100, 14);

console.log('Worker1:\t\t\t Worker2:');
console.log(worker1.firstName, worker1.secondName, '\t', worker2.firstName, worker2.secondName);
console.log(`Rate: ${worker1.rate}$ \t\t\t Rate: ${worker2.rate}$`);
console.log(`Days: ${worker1.days}  \t\t\t Days: ${worker2.days}`);
console.log(`Salary: ${worker1.getSalary()}$ \t\t Salary: ${worker2.getSalary()}$`);

console.log('\n\t\t\tSum: ', worker1.getSalary()+worker2.getSalary());