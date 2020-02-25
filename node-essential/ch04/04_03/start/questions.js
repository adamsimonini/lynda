const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    'Name: ',
    'Location: ',
    'Global jihad? (Y/n) '
];

const collectAnswers = (questions, done) => {
    const answers = [];
    const [firstQuestion] = questions;

    const questionAnswered = answer => {
        answers.push(answer);
        if (answers.length < questions.length) {
            rl.question(questions[answers.length], questionAnswered);
        } else {
            done(answers);
        }
    }
    rl.question(firstQuestion, questionAnswered);
}

collectAnswers(questions, answers => {
    console.log('The fire rises brother!');
    console.log(answers);
    process.exit();
});
