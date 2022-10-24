const today = '10/08/22'
function getDay(var_date) {
    const day = var_date[3] + var_date[4]
    return day
 }
 function getMonth(var_date) {
    return var_date[0] + var_date[1]
 }
 function getYear(var_date) {
    return var_date[6] + [7]
 }

 function formatDateEurope(var_x) {
    const formated =
    getDay(var_x) + '/' +
    getMonth(var_x) + '/' +
    getYear(var_x)
    return formated 
 }

 console.log(formatDateEurope(today))