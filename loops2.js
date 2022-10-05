//let's create a multiplication table 

/* 1 2 3 4 5 6 7 8 9 10
   2 4 6 8.....
   .
   .
   .
   10 20 30 40 50 60 70 80 90 100*/
//STEP 1: LOOP I 1-10
//STEP 2: LOOP J 1-10 INSIDE I
//STEP


//lets first to one row 
for(let i = 1; i <= 10; i++){
    let row = '';
    for(let j = 1; j <= 10; j++) {
        row += '  ' + (i * j)
    }
    console.log(row)
}

// for(let i = 1; i <= 10; i++) {
//     let wholeRow = '';
//     for(let j = 1; j <= 10; j++) {
//         wholeRow +=' ' + (i * j)
//         console.log(i * j)
//     }
//     console.log(wholeRow)
// }