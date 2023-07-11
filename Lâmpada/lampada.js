const lamp = document.querySelector('#lamp')

const botao = document.querySelector('#botao')



function isBroken(){
    return lamp.src.indexOf('quebrada') > -1
}

function isOff(){
    return lamp.src.indexOf('desligada') > -1
}

function ligada(){
    if (!isBroken()) {
        if (isOff()) {
            lamp.src = 'img/ligada.jpg';
            
        } else {
            lamp.src = 'img/desligada.jpg';
            
        }
    }
    atualizarBotao();
}

function desligada() {
    if(!isBroken()){
        lamp.src = 'img/desligada.jpg'
    }
    atualizarBotao();
}


function quebrado(){
    lamp.src = 'img/quebrada.jpg'
    botao.textContent = 'Quebrada'
}

function atualizarBotao() {
    if (lamp.src.indexOf('desligar') > -1) {
        botao.textContent = 'Desligar';
    } else {
        botao.textContent = 'Ligar';
    }
}

atualizarBotao();



botao.addEventListener('click',ligada)
lamp.addEventListener('mouseover',ligada)
lamp.addEventListener('mouseout',desligada)
lamp.addEventListener('dblclick',quebrado)