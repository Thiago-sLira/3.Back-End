const readLine = require('readline-sync');

const askHeight = () => readLine.question('Qual sua altura em cm? \n');
const askWeight = () => readLine.questionFloat('Qual seu peso em kg? \n');

module.exports = {
    askHeight,
    askWeight,
};
