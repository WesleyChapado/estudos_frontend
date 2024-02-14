//exemplo de array.
const lista = ["arroz", "feijão", "macarrão", "tomate"];
const lista_2 = ["suco", "refrigerante", "carne"];
/*
lista [0] -> "arroz"
lista [1] -> "feijão"
lista [2] -> "macarrão"
*/

//como alterar um valor na lista
lista [0] = "café";
//lista [0] -> "café"

//adicionar um novo item na lista
lista.push("laranja");

//ver a quantidade de itens na lista
lista.length; //-> 4

//remove o último elemento da lista
lista.pop(); //-> remove "laranja"

//remove o primeiro item da lista
lista.shift(); //-> remove "arroz"

//adiciona um item em primeiro lugar da lista
lista.unshift("uva"); //-> adiciona "uva"

//remove um item da lista usando sua posição
delete lista[1]; //lista[1] -> undefined(uma merda isso)

//adiciona múltiplos valores na posição indicada
//parâmetros(posição de inserção(1), quantos itens serão removidos a partir da posição de inserção(0), novos itens que serão inseridos("novo item 1", "novo item 2"))
lista.splice(1, 0, "novo item 1", "novo item 2");

//concatena as listas
//obs: podemos concatenar mais de duas ao mesmo tempo basta passar no parâmetro
const soma_lista_lista2 = lista.concat(lista_2);

//corta a matriz na posição informada até o final
//obs: a posição inicial é incluída
const lista_cortada_1 = lista.slice(2);// lista -> ["macarrão", "tomate"]

//corta a matriz na posição informada até uma posição indicada
//obs: a posição final não é incluída
const lista_cortada_2 = lista.slice(2, 3);// lista -> ["macarrão"]

//ordena a lista em ordem alfabética A-Z
lista.sort();

//ordena a lista em ordem alfabética Z-A
//obs: é necessário usar o .sort() primeiro
lista.sort();
lista.reverse();

//ordena uma lista de números
const lista_numerica = [10, 20, 30, 40];
lista_numerica.sort(function (a, b) { return a - b });

//verifica se a variável é uma lista
Array.isArray(lista); //-> true

//substitui as vírgulas pela string informada
const lista_join = ["item 0", "item 1", "item 2", "item 3", "item 4"];
document.getElementById("funcao_join").innerHTML = lista_join.join(" * ");

//exemplo de função para obter o maior valor na lista
function maiorNumero(array){
    return Math.max.apply(null, array);
}

//exemplo de função para obter o menor valor na lista
function menorNumero(array){
    return Math.min.apply(null, array);
}

//exemplo de filtro(neste caso números maiores que 20)
const numeros_maiores_que_20 = lista_numerica.filter(function(num) {
    return num > 20;
});