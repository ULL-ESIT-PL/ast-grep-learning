let operation = process.argv[2] || '+';
let numbers = [2, 3];
if (process.argv.length > 3) numbers = process.argv.slice(3);

let code = numbers.join(operation);
console.log(code);
let result = eval(code);
console.log(result);