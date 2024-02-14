//exemplo de classe obs: por convenção use nome com a primeira letra maiúscula
class Carro {
    //atributos
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    //métodos
    buzina() {
        return "biiiiiiiiiii";
    }
}

//criar um novo objeto
const novo_carro = new Carro("Fiat", "Uno", 2001);

//usar métodos do objeto
console.log(novo_carro);
console.log(novo_carro.buzina());

//altera valores das propriedades
novo_carro.marca = "Astra";
novo_carro.modelo = "Volks?";
novo_carro.ano = 2010;