//Write a function to convert a temperature given in fahrenheit to celcius

function convertFahrenheitToCelcius(temperature) {
    const tempC = (temperature - 32) * (5 / 9)
    console.log(`${temperature} °f is ${tempC.toFixed(2)} °C`)
}
convertFahrenheitToCelcius(70)


function convertOunceToPints(liquids) {
    const pint1 = (liquids / 16)
    console.log(`${liquids} oz is ${pint1} pints`)
}

convertOunceToPints(32)

let listOfGroceries = ['milk', 'beer', 'cookie', 'crackers']

function groceries(listOfGroceries, foodNumber) {
    if(foodNumber > listOfGroceries.length) {
        console.log("Choose a number between 1 - ",listOfGroceries.length)
    }
    console.log(listOfGroceries[foodNumber - 1]) 
}


groceries(listOfGroceries, 8)



