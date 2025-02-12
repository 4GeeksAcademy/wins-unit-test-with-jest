// Contenido de app.js
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDollarToYen = function(valueinDollar) {
    // Convertimos el valor a yenes
    let valueInYenes = valueinDollar * 156.5;
    // Retornamos el valor en dólares
    return valueInYenes;
}
const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a libras
    let valueInPound = valueInYen * 0.87;
    // Retornamos el valor en dólares
    return valueInPound;
}
console.log("De 5 dolares a yenes: " + fromDollarToYen(5));
console.log("de 2 euros a dolares: " + fromEuroToDollar(2));
console.log("De 1000 yenes a libras: " + fromYenToPound(1000));
// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound}