var number_1 = 1545.5

//informa par utilizar duas casas decimais
console.log(number_1.toFixed(2)); //-> 1545.50

//troca o ponto por vírgula
var string_number_1 = String(number_1)//primeiramente convertemos para string
console.log(string_number_1.replace('.', ','));//-> 1545,5

//adiciona uma string localizada para formatar a moeda
var moeda_brl = number_1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
var moeda_usd = number_1.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'});
var moeda_eur = number_1.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'});
console.log(moeda_brl);//->R$ 1545,50
console.log(moeda_usd);//->US$ 1.545,50
console.log(moeda_eur);//->€ 1.545,50