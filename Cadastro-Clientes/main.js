'use strict';

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')


const tempCliente = {
    nome: 'pedro',
    email:'darlanChagas@gmail.com',
    celular:'8789454',
    cidade: 'Jaboatao'
}

//CRUD - Create Read Update Delete
const createClient = (client) => {
    const db_clients = JSON.parse(localStorage.getItem('db_client')) ?? [];
    db_clients.push(client);
    localStorage.setItem("db_client",JSON.stringify(db_clients));
}


//Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

    createClient(tempCliente);
    console.log(tempCliente);