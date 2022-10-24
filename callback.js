function slowThing(callback) {
    console.log('Hi, I am slow')
    callback()
}
slowThing(() => {
    console.log('This is CALLBACK!')
})


console.log('-------------')

function doSecond() {
    console.log("do this after slowthing.")
}

slowThing(doSecond)



const double = (num) => num * 2

console.log(double(6))
console.log(double(16))
console.log(double(66))

const aspectRation = (width, height) => width / height


// factorial 5! = 1*2*3*4*5 (recursion)
function factorial(num) {
    if(num === 1) {
        return 1
    }
    return num * factorial(num - 1)
}
console.log(factorial(10))
