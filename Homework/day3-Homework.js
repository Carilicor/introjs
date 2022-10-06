// Pyramid problem:
// print:  (using a loop)
// #
// ##
// ###
// ####
// #####

// Extra for experts: 
// 1. Write a function named assignGrade that takes one argument, a number score.
// Returns a grade for the score, either  
// "A," "B," "C," "D," or "F." Call that function for a 
// few different scores and log the result to make sure it works.



let line = "#"
let hashtags = 5
for(i=1; i<= hashtags; i++) {
    console.log(line)
    numberOfLines = line + "#" 
}