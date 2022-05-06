console.log('Exercício JS 04\n');

// Fahrenheit para Celsius  Cálculo (122 °F − 32) × 5/9 = 50 °C

let celsius = (f = 122, d = 5 / 9) => {
    return (f - 32) * d;
};

console.log(`O valor de Fahrenheit para Celsius é: ${celsius()} °C\n`);

// Celsius para Fahrenheit  Cálculo (140 °C × 9/5) + 32 = 284 °F

let fahrenheit = (c = 140, d = 9 / 5) => {
    return c * d + 32;
};

console.log(`O valor de Celsius para Fahrenheit é: ${fahrenheit()} °F`);
