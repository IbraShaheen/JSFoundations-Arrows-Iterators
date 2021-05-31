/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/

//old sol.
/*
function logger(array){
    array.forEach(elem => console.log(elem));
}
*/

//*rev. sol.

const logger = (array) =>  array.forEach(element => console.log(element));

logger([1,2,3,4]);

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
// old sol.
/*
 const toCelsius = (temperatures)=> {
    temperatures = temperatures.map(temp => ((temp-32)*(5/9)));
    return temperatures;
};
*/

//*rev. sol

const toCelsius = (temperatures) =>  temperatures.map(temp =>(temp - 32) * (5/9))

/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold (largger than threshhold)
 ***************************************/

// old sol.
/*const hottestDays = (temperatures, threshhold) => {
    temperatures = temperatures.filter(temp);
    return temp>threshhold;
};*/

//*rev. sol.

const hottestDays = (temperatures, threshhold) => temperatures.filter(temp => temp > threshhold)


/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/

//const logHottestDays = (temperatures, threshhold) => logger(toCelsius(hottestDays (temperatures, threshhold)));

// *rev. sol.

const logHottestDays = (temperatures, threshhold) =>  logger(toCelsius(hottestDays(temperatures, threshhold)))

// arrow functions are really usefull ✔️✔️✔️✔️✔️
//*don't do that again:


// const logHottestDays = function (temperatures, threshhold) {
//   temperatures
//     .filter((t) => t > threshhold)
//     .map((t) => (t - 32) * (5 / 9))
//     .forEach((element) => console.log(ele, 7, 8, 13, 156, 1765], 5)); // should be : [6, 7, 8, 13, 156, 1765]
// logHottestDays([140, 68, 212, 45, 149, 122, 19], 80); // should log "60", "100", "65", and "50"

module.exports = { logger, toCelsius, hottestDays, logHottestDays };
