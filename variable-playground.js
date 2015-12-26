var person = {
	name: 'Wasif',
	age: 21
};

function updatePerson(obj) {
	obj.age = 30;

}

updatePerson(person);
console.log(person);

// Array
var grades = [12, 13, 14];

function addValues(grades) {
	grades.push(44);
	debugger;
}

addValues(grades);
console.log(grades);