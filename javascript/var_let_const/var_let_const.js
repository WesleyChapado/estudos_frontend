/* No JavaScript temos 3 palavras-chaves para declarar 
var = variável onde o valor atribuído pode ser alterado em qualquer escopo
let = o valor atribuído não pode ser alterado no escopo global, apenas em escopos específicos
const = o valor atribuído não pode ser alterado em nenhum escopo
*/

// VAR declaração de variáveis
var nome, sobrenome, nomeCompleto, idade;

//atribuição de valores
nome = "Wesley";
sobrenome = "Chapado";
idade = 30;
nomeCompleto = nome + " " + sobrenome;

var x = 10;//escopo geral
{
    var x = 20;//escopo específico
}

console.log(x); //-> 20, com var alterações dentro dos escopos modificam o valor global

// LET declaração de variáveis
let nome = "Wesley";
let sobrenome = "Chapado";

let x = 10;//escopo geral
{
    let x = 20;//escopo específico
}

console.log(x); //-> 10, com let alterações dentro dos escopos não modificam o valor global

// CONST declaração de variáveis
const nome = "Wesley";
const sobrenome = "Chapado";

const x = 10;//escopo geral
{
    const x = 20;//escopo específico -> erro, não permitido alterar constantes
}

console.log(x); //-> 10