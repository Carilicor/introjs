//lets write a loop

// for (let i = 0; i < 10; i++) {
//     console.log(i,'Hello there!')
// }

const mentors = [
    'Peter',
    'Cassandra',
    'Bridgette',
    'Arthur',
    'Sebas',
    'Nerissa'
]

let firstname;
for(let i = 0; i < mentors.length; i++) {
    firstname = mentors[i]
    console.log(`${firstname} is an awesome mentor!`)
}
console.log(firstname)