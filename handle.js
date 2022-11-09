function sum (ctx) {
    const message = ctx.message.text.split(' ');
    const firstNumber = Number(message[1]);
    const secondNumber = Number(message[2]);
    const result = firstNumber + secondNumber;
    ctx.reply(`Your result is ${result}`);
}
function mult (ctx) {
    const message = ctx.message.text.split(' ');
    const firstNumber = Number(message[1]);
    const secondNumber = Number(message[2]);
    const result = firstNumber * secondNumber;
    ctx.reply(`Your result is ${result}`);
}
function dev (ctx) {
    const message = ctx.message.text.split(' ');
    const firstNumber = Number(message[1]);
    const secondNumber = Number(message[2]);
    const result = firstNumber / secondNumber;
    ctx.reply(`Your result is ${result}`);
}

function min (ctx) {
    const message = ctx.message.text.split(' ');
    const firstNumber = Number(message[1]);
    const secondNumber = Number(message[2]);
    const result = firstNumber - secondNumber;
    ctx.reply(`Your result is ${result}`);
}

module.exports = { min, sum, mult, dev };