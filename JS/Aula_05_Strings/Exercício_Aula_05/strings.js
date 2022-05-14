const leroLero = 'Dr Stephen Strange lança um feitiço proibido que abre um portal para o multiverso. No entanto, surge uma ameaça que pode ser grande demais para sua equipe lidar.'

console.log('TEXTO')
console.log(`\" ${leroLero} \"`);

console.log(`\nAcessando a primeira posição do índice do texto: \"${leroLero.charAt(0)}\"`);

console.log(`\nO tamanha da String é: \"${leroLero.length}\"`);

console.log(`\nSubistituindo o nome no texto:\n \" ${leroLero.replace('Dr Stephen Strange', 'Feiticeira Escarlate')} \"`);

const word = leroLero.split(' ');
console.log(word);
console.log(`\nAcessando o índice de posição: \"${word[13]}\"`);

console.log(`\n\" ${leroLero.toUpperCase()} \"`);