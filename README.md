# Scan your project with AST-Grep

See https://ast-grep.github.io/guide/scan-project.html

## Create Scaffolding

```bash
➜  ast-grep-learning git:(main) ✗ sg new
No sgconfig.yml found. Creating a new ast-grep project...
> Where do you want to have your rules? rules
> Do you want to create rule tests? Yes
> Where do you want to have your tests? rule-tests
> Do you want to create folder for utility rules? Yes
> Where do you want to have your utilities? utils
Your new ast-grep project has been created!
```

## Create the Rule

```bash
➜  ast-grep-learning git:(main) ✗ sg new rule
> What is your rule's name? no-eval
> Choose rule's language JavaScript
Created rules at ././rules/no-eval.yml
> Do you also need to create a test for the rule? Yes
Created test at ./rule-tests/no-eval-test.yml
```

`➜  ast-grep-learning git:(step2) ✗ cat test.js`
```js 
let operation = process.argv[2] || '+';
let numbers = [2, 3];
if (process.argv.length > 3) numbers = process.argv.slice(3);

let code = numbers.join(operation);
console.log(code);
let result = eval(code);
console.log(result);
```

## Run the scan 
```
➜  ast-grep-learning git:(step2) ✗ sg scan    
error[no-eval]: Do not use eval! Dangerous! Hazardous! Perilous!
  ┌─ ./test.js:7:14
  │
7 │ let result = eval(code);
  │              ^^^^^^^^^^

Error: 1 error(s) found in code.
Help: Scan succeeded and found error level diagnostics in the codebase.
```