//exemplo de um for
for (let i=0; i<10; i++){
    console.log(i);
}

//exemplo para adicionar opções no select(i-- decrescente também funciona)
for (let i=1990; i<=2024; i++){
    document.getElementById("ano").innerHTML += "<option value='"+i+"'>"+i+"</option>";
}

//iterando com uma lista
const carros = ["gol", "astra", "ferrari", "fusca"]
for (let i=0; i<carros.length; i++) {
    document.getElementById("carro").innerHTML += "<option value='"+carros[i]+"'>"+carros[i]+"</option>";
}