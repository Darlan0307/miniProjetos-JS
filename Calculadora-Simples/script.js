'use strict';

const numeros = document.querySelectorAll('[id*=numero]');

const operadores = document.querySelectorAll('[id*=operador]');

const display = document.getElementById('display');


let numeroNovo = true;
let operador;
let numeroAnterior;

const operadorPendente = () => operador != undefined;

const calculo = () => {
    if(operadorPendente()){
        const numeroAtual = Number(display.textContent.replace(',','.'));
        numeroNovo = true;
        const resultado = eval(`${numeroAnterior}${operador}${numeroAtual}`)

        atualizarDisplay(resultado);
    }
}

const atualizarDisplay = texto => {
    if(numeroNovo){
        display.textContent = texto.toLocaleString('BR');
        numeroNovo = false;
    }else{
        display.textContent += texto.toLocaleString('BR');
    }
    
} 


const inserirNumero = evento => atualizarDisplay(evento.target.textContent);

numeros.forEach(numero => numero.addEventListener('click',inserirNumero));

const selecionarOperador = evento => {
    if(!numeroNovo){
        calculo();
        numeroNovo = true;
        operador = evento.target.textContent;
        numeroAnterior = Number(display.textContent.replace(',','.'));
    }
}
operadores.forEach(operador => operador.addEventListener('click',selecionarOperador));

const ativarIgual = () => {
    calculo();
    operador = undefined;
}
document.getElementById('igual').addEventListener('click',ativarIgual);

const existeDecimal = () => display.textContent.indexOf(',') != -1;

const existeValor = () => display.textContent.length > 0;

const numeroDecimal = () => {
    if(!existeDecimal()){
        if(existeValor()){
            atualizarDisplay(',');
        }else{
            atualizarDisplay('0,');
        }
    }
}
document.getElementById('decimal').addEventListener('click',numeroDecimal);

const limparDisplay = () => {
    display.textContent = '';
    operador = undefined;
    numeroNovo = true;
}
document.getElementById('limparDisplay').addEventListener('click',limparDisplay);

const mapaTeclas = {
    '0' : 'numero0',
    '1' : 'numero1',
    '2' : 'numero2',
    '3' : 'numero3',
    '4' : 'numero4',
    '5' : 'numero5',
    '6' : 'numero6',
    '7' : 'numero7',
    '8' : 'numero8',
    '9' : 'numero9',
    '*' : 'operadorMultiplicar',
    '/' : 'operadorDivisao',
    '-' : 'operadorSubtrair',
    '+' : 'operadorAdicionar',
    ',' : 'decimal',
    'Enter' : 'igual',
    'Backspace' : 'limparDisplay'
}

const mapearTeclas = evento => {
    const tecla = evento.key;


    
    const teclaPermitida = () => {
        return Object.keys(mapaTeclas).indexOf(tecla) != -1;
    }

    if(teclaPermitida()){
        document.getElementById(mapaTeclas[tecla]).click();
    
    }

}

document.addEventListener('keydown',mapearTeclas);