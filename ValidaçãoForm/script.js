const form = document.querySelector('#form')
const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const senha = document.querySelector('#senha')
const foco = document.querySelector('#foco')
const mensagem = document.querySelector('#mensagem')

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let cont = 0;
    
    if(cont == 0 && nome.value === ''){
        alert('Por favor,Preencha o seu nome')
        cont++;
    }

    if((cont == 0 && email.value === '') || ( cont == 0 && !isValidEmail(email.value))){
        alert('Por favor,Preencha o seu email');
        cont++;
    }

    if(cont == 0 && senha.value === ''){
        alert('Por favor,preencha a senha');
        cont++;
    }else if(cont == 0 && senha.value.length <= 8){
        alert('Senha muito pequena')
        cont++;
    }

    if(cont == 0 && foco.value === ''){
        alert('Por favor,preencha a sua situação');
        cont++;
    }

    if(cont == 0 && mensagem.value ===''){
        alert('Por favor,preencha a mensagem');
        cont++;
    }
    if(isFielFill()){
        form.submit()
    }
})

const isFielFill = () =>{
    return form.reportValidity()
}

const isValidEmail = (email) => {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)){
        return true;
    }
    return false
}