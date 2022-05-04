console.log('Festa de Fim de Ano');

let convidados = ['Joaquin', 'José', 'Silva', 'Xavier'];
console.log(`\nConvidados: ${convidados}`);

console.log('\n+ Amanda entrou na festa');
console.log('* Lista Atualizada');

let a = convidados.unshift ('Amanda');
console.log(`Convidados: ${convidados}`);

console.log('\n- Xavier saiu da festa');
let x = convidados.pop();

console.log('* Lista Atualizada')
console.log(`Convidados: ${convidados}`);

console.log('\n+ Zuleica entrou na festa');
let z = convidados.push('Zuleica');

console.log('* Lista Atualizada');
console.log(`Convidados: ${convidados}`);

console.log('\n- Amanda saiu da festa');
let aA = convidados.shift();

console.log('* Lista Atualizada');
console.log(`Convidados: ${convidados}`);

console.log('\n- Silva saiu da festa');
delete  convidados[2];

console.log('* Lista Atualizada');
console.log(`Convidados: ${convidados}`);

console.log('\n+ Entrou Silvana na festa');
convidados[2] = 'Silvana';

console.log('* Lista Atualizada');
console.log(`Convidados: ${convidados}`);

console.log(`\nFicaram: (${convidados}) 4 Convidados e Sairam: (Amanda, Silva, Xavier) 3 Convidados.`);