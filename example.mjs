import { js } from '@ast-grep/napi';

let source = `console.log("hello world")`
const ast = js.parse(source)                // 1. parse the source
const root = ast.root()                     // 2. get the root
const node = root.find('console.log($A)')   // 3. find the node
let result = node.getMatch('A').text()                   // 4. collect the info
console.error(result);
// "hello world"
