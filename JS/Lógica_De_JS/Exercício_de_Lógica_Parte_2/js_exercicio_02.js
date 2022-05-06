console.log('\nExercício de JS 02');

let area = (b = 5, h = 25) => {
    return b * h;
};

console.log(`A área do retângulo é: ${area()}cm`);