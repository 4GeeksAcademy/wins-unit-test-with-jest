// Importar la función sum del archivo app.js

const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');
//fromEuroToYen
test("Un euro equivale a 1.07 dólares, 2 euros equivalen a 2.14 dolares", () => {
    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(2);
    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 2 * 1.07;
    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected); // 1 euro son 1.07 dólares, entonces 2 euros deberían ser = (2 * 1.07)
});
//fromDollarToYen
test("1 dolar que equivalga a 156.5 yenes, 5 dolares que equivalga a 782.5 yenes", () => {
    const yen = fromDollarToYen(5);
    const expected = 5 * 156.5;
    expect(yen).toBe(expected);
})
//fromYenToPound
test("1 yen que equivalga a 0.87 libras, 1000 yenes que equivalga a 870 libras", () => {
    const libra = fromYenToPound(1000);
    const expected = 1000 * 0.87;
    expect(libra).toBe(expected);
})
//fromYenToPound Mayor que
test("1 yen equivale a 0.87 libras, 1000 yenes es mayor que 700 libras", () => {
    const libra = fromYenToPound(1000);
    const expected = 700;
    expect(libra).toBeGreaterThan(expected);
})
//fromDollarToYen Menor que
test("1 dolar que equivalga a 156.5 yenes, 5 dolares es menor que 900 yenes", () => {
    const yen = fromDollarToYen(5);
    const expected = 900;
    expect(yen).toBeLessThan(expected);
})