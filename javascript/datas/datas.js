//comando base para obter a data completa
let data = new Date();
console.log(data);//->2024-02-14T20:56:27.309Z

//obter o ano
let ano = data.getFullYear();
console.log(ano);//->2024

//obter o mês
let mes = data.getMonth();
console.log(mes);//->1

//obter o dia do mês
let dia_mes = data.getDate();
console.log(dia_mes);//->14

//obter o dia da semana
let dia_da_semana = data.getDay();
console.log(dia_da_semana);//->3

//obter o hora
let hora = data.getHours();
console.log(hora);//->20

//obter o minuto
let minuto = data.getMinutes();
console.log(minuto);//->56

//obter o segundo
let segundo = data.getSeconds();
console.log(segundo);//->27

//obter o milissegundo
let milissegundo = data.getMilliseconds();
console.log(milissegundo);//->309

//obter a data no padrão brasileiro
let dataHoraBr = data.toLocaleString('pt-BR');
console.log(dataHoraBr);//->14/02/2024, 18:10:08

//obter apenas a data sem a hora
let dataBr = data.toLocaleDateString('pt-BR');
console.log(dataBr);//->14/02/2024

//obter apenas a hora
let horaBr = data.toLocaleTimeString('pt-BR');
console.log(horaBr);//->18:11:53

//concatenar datas
d = new Date();
diaMes = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();

//função simples para adicionar 0 na frente dos dias e meses
function addZero(x){ return x<10 ? '0' + x : '' + x;};

let somaData = addZero(diaMes) + "/" + addZero(mes) + "/" + ano;
console.log(somaData)//->14/02/2024

//comparar datas
var hoje = new Date();
var vencimento = new Date(2022, 0, 15);//referente a 15/01/2022

if (hoje > vencimento) {
    console.log("Hoje é maior que o vencimento");
}else{
    console.log("Hoje é menor que o vencimento");
}

//obter a diferença entre duas datas em dias
var dataInicial = new Date();
var dataFinal = new Date(2025, 11, 31);

//calcula a diferença em milissegundos
var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();
//calcula a diferença em dias
var diferencaDias = Math.ceil(diferencaTempo / (24*60*60*1000));
console.log(diferencaDias);//->686