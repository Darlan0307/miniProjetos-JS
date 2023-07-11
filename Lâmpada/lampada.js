const ligar = document.querySelector('#ligar')
const desligar = document.querySelector('#desligar')
const lamp = document.querySelector('#lamp')

function isBroken(){
    return lamp.src.indexOf('quebrada') > - 1
}

function ligada(){
    if(!isBroken()){
        lamp.src = 'img/ligada.jpg'
    }
}

function desligada(){
    if(!isBroken()){
        lamp.src = 'img/desligada.jpg'
    }
}

function quebrada (){
    lamp.src = 'img/quebrada.jpg'
}

ligar.addEventListener('click',ligada)
desligar.addEventListener('click',desligada)
lamp.addEventListener('mouseover',ligada)
lamp.addEventListener('mouseout',desligada)
lamp.addEventListener('dblclick',quebrada)