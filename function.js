// 1. DO SOMETHING/ NO PARAMETERS

function sayHello() {
    console.log('Hello')
}

sayHello()
console.log('...do something else...')
sayHello()

//2. DO SOMETHING / WITH PARAMETER(S)

function greetPreson(name) {
    console.log(`Hello ${name}. Welcome!`)
} 

greetPreson('Gianna')
greetPreson('Brad')

// 3. RETUNS SOMETHING / NO PARAMETERS

function addTwoPlusTwo(){
    return 2 + 2
}

console.log(addTwoPlusTwo())
const answer = addTwoPlusTwo()

console.log('Answer:', answer)

// 4. RETURNS SOMETHING / WITH PARAMETER (S)

function doubleMyNumber(number) {
    return number * 2
}
console.log(doubleMyNumber(11))


