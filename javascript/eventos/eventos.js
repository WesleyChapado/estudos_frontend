//onclick
function eventoOnclick(){
    alert('Evento onclick acionado!');
}

//ondblclick
function eventoOndblclick(){
    alert('Evento ondblclick acionado!');
}

//onmouseover
function eventoOnmouseover(){
    //armazena o elemento com o id especificado na variável
    let div = document.getElementById("divEventoOnmouseoverOnmouseout");
    div.style.backgroundColor = "red";
}

//onmouseout
function eventoOnmouseout(){
    //armazena o elemento com o id especificado na variável
    let div = document.getElementById("divEventoOnmouseoverOnmouseout");
    div.style.backgroundColor = "blue";
}

//onmousemove
function eventoOnmousemove(){
    //armazena o elemento com o id especificado na variável
    let div = document.getElementById("divEventoOnmousemove");
    //gera uma cor aleatória
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    div.style.backgroundColor = randomColor;
}

//onmousedown(aciona instantaneamente ao ser pressionado)
function eventoOnmousedown(){
    alert('Evento onmousedown acionado!');
}

//onmouseup(ao ser solto)
function eventoOnmouseup(){
    alert('Evento onmouseup acionado!');
}

//onfocus(ao focar o campo)
function eventoOnfocus(){
    let input = document.getElementById("inputOnfocus");
    input.value = "Elemento focado";
    input.style.backgroundColor = "yellow";
}

//onblur(ao desfocar o campo)
function eventoOnblur(){
    let input = document.getElementById("inputOnfocus");
    input.value = "Elemento desfocado";
    input.style.backgroundColor = "greenyellow";
}

//onchange
function eventoOnchange(){
    let input = document.getElementById("inputOnchange");
    input.value = "Elemento alterado";
    input.style.backgroundColor = "yellow";
}

//onkeydown(aciona na descida do botão instantaneamente)
function eventoOnkeydown(){
    let input = document.getElementById("inputOnkeydown");
    input.value = "Tecla pressionada ";
    input.style.backgroundColor = "yellow";
}

//onkeyup(aciona na subida do botão)
function eventoOnkeyup(){
    let input = document.getElementById("inputOnkeyup");
    input.value = "Tecla solta ";
    input.style.backgroundColor = "yellow";
}

//onkeypress(aciona igual onkeydown porém sempre uma ação atrasada)
function eventoOnkeypress(){
    let input = document.getElementById("inputOnkeypress");
    input.value = "Tecla pressionada ";
    input.style.backgroundColor = "yellow";
}

//onload(dispara quando a página terminou de carregar)
function eventoOnload(){
    console.log('Evento onload acionado')
}

//onresize(acionado quando a janela for redimencionada)

function eventoOnresize(){
    console.log('Evento onresize acionado')
}

//adiciona um listener(chama a função quando o evento for acionado)
var elemento = document.getElementById("id_element")
elemento.addEventListener('click', eventoOnclick)