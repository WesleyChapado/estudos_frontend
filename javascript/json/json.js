const carrro = {
    marca: "ford",
    modelo: "ks",
    ano: 2020,
    placa: "ABC-1234",
}

//converte um objeto em um texto
let texto = JSON.stringify(carrro);

//converte um texto em um objeto
let objeto = JSON.parse(texto);

//exemplo consumindo uma api
const ajax = new XMLHttpRequest();
ajax.open('GET', 'https://viacep.com.br/ws/01001000/json/')
ajax.send();
ajax.onload = function(){
    let endereco = JSON.parse(this.responseText);
    console.log(endereco);
}