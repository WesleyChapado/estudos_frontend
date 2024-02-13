var numero1, numero2, total;
numero1 = 5;
numero2 = 2;
texto1 = "Texto 1";
texto2 = "Texto 2";

//Operadores aritméticos
total = numero1 + numero2;
total = numero1 - numero2;
total = numero1 / numero2;
total = numero1 * numero2;
total = ++numero1; //incrementa 1, obs: o valor atribuído em numero1 também será alterado
total = --numero1; //decrementa 1, obs: o valor atribuído em numero1 também será alterado

//Operadores de atribuição
total = numero1 + numero2; //o sinal de = é o valor de atribuição
numero1 += numero2; //numero1 = numero1 + numero2
numero1 -= numero2; //numero1 = numero1 - numero2
numero1 /= numero2; //numero1 = numero1 / numero2

//Operadores de sequência
total = texto1 + texto2; //concatena strings

//Operadores de comparação
total = (numero1 == numero2); //compara os valores atribuídos
total = (numero1 === numero2); //compara os valores atribuídos e os tipos da variáveis
total = (numero1 != numero2); //compara os valores atribuídos
total = (numero1 !== numero2); //compara os valores atribuídos e os tipos da variáveis
total = (numero1 < numero2);
total = (numero1 > numero2);
total = (numero1 <= numero2);
total = (numero1 >= numero2);

// Operadores condicionais(Ternários)
var idade, pessoa, resultado;
idade = 18;

pessoa = (idade >= 18)?"Maior de idade":"Menor de idade"; //se true atribuí o primeiro valor, se false atribuí o segundo valor
resultado = (idade > 60 && idade < 70) //&& = and
resultado = (idade === 60 || idade === 70) //|| = or
resultado = !(idade === 60) //! = negação