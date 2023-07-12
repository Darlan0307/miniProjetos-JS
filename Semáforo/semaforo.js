const semaforo = document.querySelector('#img')
const bvermelho = document.getElementsByTagName('button')[0]
const bamarelo = document.getElementsByTagName('button')[1]
const bverde = document.getElementsByTagName('button')[2]
const bauto = document.getElementsByTagName('button')[3]

function semiRed(){
    semaforo.src = 'img/vermelho.png'
}
function semiyellow(){
    semaforo.src = 'img/amarelo.png'
}
function semigreen(){
    semaforo.src = 'img/verde.png'
}

function semiauto() {
    if (1 <= 100) {
      setTimeout(function() {
        bvermelho.click();
        setTimeout(function() {
          bamarelo.click();
          setTimeout(function() {
            bverde.click();
            semiauto(1 + 1); // Chama recursivamente a função para o próximo clique
          }, 2000);
        }, 2000);
      }, 2000);
    }
  }
  
  
  

bvermelho.addEventListener('click',semiRed)
bamarelo.addEventListener('click',semiyellow)
bverde.addEventListener('click',semigreen)
bauto.addEventListener('click',semiauto)