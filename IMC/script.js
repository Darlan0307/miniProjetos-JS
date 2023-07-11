let nome = document.querySelector('input#nome');
let peso = document.querySelector('input#peso');
let altura = document.querySelector('input#altura');
let campo = document.querySelector('div#resultado');
let escondido = document.querySelector('div.hiden');

function calcImc(){
    peso = Number(peso.value);
    altura = Number(altura.value);

    let imc = peso/(altura**2);
    let tipo;

    if(imc < 18.4){
        tipo = "Magreza";
    }else if(imc < 24.9){
        tipo = "Normal";
    }else if(imc < 29.9){
        tipo = "Pre-obeso";
    }else{
        tipo = "Obesidade";
    }

    campo.innerHTML = `<p>${nome.value}, seu imc é ${imc.toFixed(2)} e o seu tipo é ${tipo}</p>`;

    escondido.classList.remove('hiden');
}



