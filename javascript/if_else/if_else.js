//exemplo simples de if/else
var interruptor = "on";

if (interruptor == "on"){
    console.log("on");
}else{
    console.log("off");
}

//exemplo com elseIf
var hora = new Date().getHours

if (hora < 12) {
    console.log("Bom dia");
}else if (hora < 18){
    console.log("Boa tarde");
}else{
    console.log("Boa noite");
}

//exemplo de validação de entrada
function verificar(){
    let nome = document.getElementById("nome");

    if (nome.value == "" || nome.value == null){
        alert("Preencha o campo");
    }else{
        alert("Nome válido");
    }
}