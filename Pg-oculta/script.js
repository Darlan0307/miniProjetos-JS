const campoform = document.querySelector('.campoform')

const abirCaixa = () =>{
    campoform.classList.add('active');
}

const fecharCaixa = () =>{
    campoform.classList.remove('active');
}

document.getElementById('button').addEventListener('click',abirCaixa)

document.querySelector('.ico').addEventListener('click',fecharCaixa);