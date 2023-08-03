const campoSenha = document.querySelector('.camposenha')
const senhatext = document.querySelector('#senhaText')
const campoForm = document.querySelector('.form')

const container = document.querySelector('.container')

let charSet = "abcdfghijklmnopqrstuvxwyz1234567890@ABCDEFGHIJKLMNOPQRSVUWXYZ$_";

function criarSenha(){
    let pass ='';

    for(let i = 0,n = charSet.length;i<10;++i){
        pass += charSet.charAt(Math.floor(Math.random() * n));
    }
    return pass;
}

const removerHide = () =>{
    const senha = criarSenha();
    senhatext.textContent = senha;
    campoSenha.classList.remove('hide')

}

const copiarSenha = (e) =>{
    e.preventDefault();
    let senha = senhatext.textContent;
    navigator.clipboard.writeText(senha)
    
}

document.getElementById('gerarSenha').addEventListener('click',removerHide)
document.querySelector('#copy').addEventListener('click',copiarSenha);
document.querySelector('#botao').addEventListener('click',(e)=>{
    e.preventDefault();
    alert("Cadastro feito");
    campoForm.submit();
})

