//executa uma função após o tempo informado
//parâmetros(função a ser executada, tempo de espera para execução em milissegundos)
console.log("A contagem foi iniciada");
contagem = setTimeout(alerta, 2000)

//para a contagem do timeout
console.log("A contagem foi interrompida");
clearTimeout(contagem);

//executa a mesma função repetidamente para cada intervalo de tempo informado
//parâmetros(função a ser executada, tempo de espera em milissegundos para repetir a execução)
console.log("A repetição foi iniciada");
repete = setInterval(alerta, 2000)

//para a contagem do interval

console.log("A repetição foi interrompida");
clearInterval(repete);

function alerta(){
    console.log("Função acionada")
}