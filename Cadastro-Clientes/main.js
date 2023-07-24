'use strict';

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')
    

const tempCliente = {
    nome: 'darlan',
    email:'darlanChagas@gmail.com',
    celular:'8789454',
    cidade: 'Jaboatao'
}

//CRUD - Create Read Update Delete



//Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

    createClient(tempCliente);
    console.log(tempCliente);