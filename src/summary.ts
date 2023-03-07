import {Organisation} from "./organisation.js";

console.log("Hello, world.");

const readline = require('readline').createInterface({
    input: process.stdin
});

const inputLines: string[] = []
readline.on('line', (input: string) => {
    inputLines.push(input)
})

readline.on('close', () => {
    console.log('\nBye!')
    console.log(inputLines)
    const organisation = new Organisation()
    inputLines.map(event => organisation.update(event))
    process.exit(0)
})
