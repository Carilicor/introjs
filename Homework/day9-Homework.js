//Write a function that prints the numbers from 1 to 100. 
//But for multiples of three print “Fizz” instead of the number and for 
//the multiples of five print “Buzz”. For numbers which are multiples of both three 
//and five print “FizzBuzz”.

//  && stands for a set of boolean operands will be true if and only if all the operands are 
//  true. Otherwise it will be false 

//  % 

for (let i = 1; i < 101; i++) {
    if (i % 3 && i % 5) {
        console.log(i)
    } else {
        if (i % 3 == 0) {
            console.log("Fizz" + i)
        }
        if (i % 5 == 0) {
            console.log("Buzz" + i)
        }
    }
}
        


