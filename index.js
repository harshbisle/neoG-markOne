const readlineSync = require('readline-sync');
const chalk = require('chalk');

let name = readlineSync.question(chalk.yellow('Hey there!, What\'s  your good name? '));

while(name.length === 0) {
	name = readlineSync.question(chalk.yellow('Hey there!, What\'s your good name? '));
}

console.log(chalk.yellow(`Welcome, ${name}! \n`));
console.log(chalk.yellow('Let\'s see how well do you know me! \n'));

let score = 0;

function askQuestion(ques, ans) {
	let userAns = readlineSync.question(chalk.bold(ques));

	while(userAns.length === 0) {
		userAns = readlineSync.question(chalk.bold(ques));
	}

	if(userAns.toLowerCase() == ans.toLowerCase()) {
		console.log(chalk.bold.greenBright('Exactly!!!:)'));
		score++;
	} else {
		console.log(chalk.bold.red('Noo! You dont Know me:('));
		console.log(chalk.bold.greenBright(`The answer is ${ans}.`));}

	console.log(chalk.underline(`Score: ${score} \n`));
}

var quesList = [
	{
		q: 'What is my full name? ',
		a: 'Harshavardhan Bisle',
	},
	{
		q: 'Do you know my Girlfreind\'s name? ',
		a: 'JavaScript',
	},
	{
		q: 'which skill am I currently honing? ',
		a: 'Programmming',
	},
	{
		q: 'Where do I live? ',
		a: 'Bangalore',
	},
	{
		q: 'What is my qualification? ',
		a: 'BE',
	},
	{
		q: 'Which is my Department? ',
		a: 'CSE',
	},
	
];

for(var i=0; i<quesList.length; i++) {
	askQuestion(quesList[i]["q"], quesList[i]["a"]);
}

console.log(chalk.italic.bold.bgBlue(`Result: Your score is ${score} points!, feel free to connect with me to know more about me and keep learning `));
