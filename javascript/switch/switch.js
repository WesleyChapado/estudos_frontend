//exemplo de switch, a comparação é literal(===)
let expressao = "a"
switch (expressao){
    case "a":
        //o que acontece
        break;
    case "b":
        //o que acontece
        break;
    case "c":
        //o que acontece
        break;
    default:
        //o que acontece
}

function verifica_cor(){
    let cor = document.getElementById("cor").value;

    switch (cor){
        case "azul":
            document.body.style.background = "blue";
            break;
        case "vermelho":
            document.body.style.background = "red";
            break;
        case "verde":
            document.body.style.background = "green";
            break;
        default:
            alert("Nenhuma cor disponível para a cor: " + cor);
    }
}

function verifica_dia_da_semana(){
    let dia_hoje = new Date().getDay();

    switch (dia_hoje){
        case 0:
            alert("Hoje é Domingo");
            break;
        case 1:
            alert("Hoje é Segunda");
            break;
        case 2:
            alert("Hoje é Terça");
            break;
        case 3:
            alert("Hoje é Quarta");
            break;
        case 4:
            alert("Hoje é Quinta");
            break;
        case 5:
            alert("Hoje é Sexta");
            break;
        default:
            alert("Hoje é Sábado");
    }
}