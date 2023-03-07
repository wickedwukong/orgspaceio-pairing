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
    process.exit(0)
})
