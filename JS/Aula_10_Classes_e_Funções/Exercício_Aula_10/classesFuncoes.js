class Pessoa {
    constructor(nome, dataNascimento) {
        this.nome = nome;
        this.data = new Date(dataNascimento);
    }

    getIdade(data) {
        let idade = data.getFullYear() - this.data.getFullYear();
        if (data.getMonth() < this.data.getMonth()) idade--;
        else if (data.getMonth() == this.data.getMonth() && data.getDate() < this.data.getDate()) idade--;
        return idade;
    }
};

let dataHoje = new Date();
let ano = dataHoje.getFullYear();

let pessoas = new Array(10); // Array vázio

pessoas[0] = new Pessoa('Marcos', '1998-08-22');
pessoas[1] = new Pessoa('Bruno', '1999-05-03');
pessoas[2] = new Pessoa('Jeferson', '2000-06-30');
pessoas[3] = new Pessoa('João', '2001-09-01');
pessoas[4] = new Pessoa('Matheus', '2002-03-18');
pessoas[5] = new Pessoa('Camila', '2003-01-12');
pessoas[6] = new Pessoa('Priscila', '2004-04-09');
pessoas[7] = new Pessoa('Amanda', '2005-02-27');
pessoas[8] = new Pessoa('Maria', '2006-03-18');
pessoas[9] = new Pessoa('Vanda', '2007-10-25');


console.log(`Nome: ${pessoas[0].nome} tem ${pessoas[0].getIdade(dataHoje)} anos`);
console.log(`\nNome: ${pessoas[1].nome} tem ${pessoas[1].getIdade(dataHoje)} anos`);
console.log(`\nNome: ${pessoas[2].nome} tem ${pessoas[2].getIdade(dataHoje)} anos`);
console.log(`\nNome: ${pessoas[3].nome} tem ${pessoas[3].getIdade(dataHoje)} anos`);
console.log(`\nNome: ${pessoas[4].nome} tem ${pessoas[4].getIdade(dataHoje)} anos`);
console.log(`\nNome: ${pessoas[5].nome} tem ${pessoas[5].getIdade(dataHoje)} anos`);
console.log(`\nNome: ${pessoas[6].nome} tem ${pessoas[6].getIdade(dataHoje)} anos`);
console.log(`\nNome: ${pessoas[7].nome} tem ${pessoas[7].getIdade(dataHoje)} anos`);
console.log(`\nNome: ${pessoas[8].nome} tem ${pessoas[8].getIdade(dataHoje)} anos`);
console.log(`\nNome: ${pessoas[9].nome} tem ${pessoas[9].getIdade(dataHoje)} anos`);
