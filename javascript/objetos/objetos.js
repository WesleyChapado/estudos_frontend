//exemplo de objeto(pratica comum usar const para criar objetos)
const carro = {
    //propriedades
    marca: "ford",
    modelo: "ks",
    ano: 2020,
    placa: "ABC-1234",

    //métodos
    buzina: function(){
        console.log("biiiiiiiiiii");
    },
    completo: function(){
        return "A marca é "+this.marca+" e o modelo é "+this.modelo;//this se refere ao próprio objeto
    }
}

//usar propriedades do objeto carro
console.log(carro["marca"], carro["modelo"], carro["ano"]);

//usar métodos do objeto carro
carro.buzina();
console.log(carro.completo());