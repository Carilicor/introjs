//Create a function that takes two arguments. Both arguments are integers, 
//a and b. Return true if one of them is 10 or if their sum is 10.


function findIfTrue(a, b) {
    return ((a == 10 || b == 10) || (a + b == 10))
}
console.log(findIfTrue(10,5))
console.log(findIfTrue(3,5))
console.log(findIfTrue(2,10))
console.log(findIfTrue(3,7))



//create a function that removes the first and last characters of a string,
// and returns the updated string.


const str = 'caridad';

const removeCharacters = str.slice(1, -1);
console.log(removeCharacters); 









/*There is a lowercase word hidden amongst a string of capital letters. 
Write a function to return the lowercase word.
Note: the wanted word is in all lowercase letters. All the other letters are capitalized. 
The word is spread out amongst the random capital letters, 
but the letters remain in the same order. Example: findWord("PImReDCoQw") -> "meow"*/




