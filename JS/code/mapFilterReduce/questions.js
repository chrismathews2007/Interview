let students = [
	{ name: 'John', rollNumber: 31, marks: 85 },
	{ name: 'Emily', rollNumber: 15, marks: 90 },
	{ name: 'Michael', rollNumber: 16, marks: 35 },
	{ name: 'Sophia', rollNumber: 7, marks: 45 },
];

// ? 1. return only name with capital letters

let names = [];
for (let i = 0; i < students.length; i++) {
	names.push(students[i].name.toUpperCase());
}
// const names = students.map(item => item.name.toUpperCase())

console.log(names);

// ? return only detail of those who scroed morethan 60

const moreThan60 = students.filter((stu) => stu.marks > 60);

console.log(moreThan60);

// ? reurn marks moreThan 60 and rollNumber morethat 15

const doubleCondition = students.filter(
	(stu) => stu.rollNumber > 15 && stu.marks > 60
);

console.log('doubleCondition', doubleCondition);

// ? sum of all marks

const sum = students.reduce((acc, cur) => (acc += cur.marks), 0);

console.log('sum: ', sum);

// ? return only names who scored morethan 60

const more_names = students
	.filter((stu) => stu.marks > 60 && stu.name)
	.map((stu) => stu.name);

console.log('more_names: ', more_names);

// ? rturn total marks for students with marks morethan 60 after 20 marks have been added who scored lessthan 60

const allMarks = students
	.map((stu) => {
		if (stu.marks < 60) {
			stu.marks += 20;
		}
		return stu;
	})
	.filter((stu) => stu.marks > 60)
	.reduce((acc, curr) => (acc += curr.marks), 0);

console.log('allMarks: ', allMarks);
