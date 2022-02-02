class MyString{
	strReverse(str){
		return str.split('').reverse().join('');
	}
	strUcFirst(str){
		return str.replace(/^\w/, (c) => c.toUpperCase());
	}
	strUcWords(str){
		return str.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
	}
}

let str = new MyString();

console.log(str.strReverse('IVAN'));
console.log(str.strUcFirst('arsenal - football team'));
console.log(str.strUcWords('The best football team is arsenal'));