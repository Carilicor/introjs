const students = require("./students.json")
//display all the students first name one at a time, one per line. 
function showStudents(studentList) {
    
    for(let i = 0; i < studentList.length; i++) {
        const student = studentList[i]
        console.log(student.firstName) // hi
    }
 
         
}
showStudents(students)