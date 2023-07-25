'use strict';

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    clearFildes();
    document.getElementById('modal').classList.remove('active'); 
}


const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? [];
const setLocalStorage = (dbClient) => localStorage.setItem("db_client",JSON.stringify(dbClient));

//CRUD - Create Read Update Delete

const readClient = () =>getLocalStorage();

const createClient = (client) => {
    const dbClient = getLocalStorage();
    dbClient.push(client);
    setLocalStorage(dbClient);
}

const updateClient = (index,client) => {
    const dbClient = readClient();
    dbClient[index] = client;
    setLocalStorage(dbClient);

}

const deleteClient = (index) => {
    const dbClient = readClient();
    dbClient.splice(index,1);
    setLocalStorage(dbClient);
}

const isValidFilds = () => {
    return document.getElementById('form').reportValidity()
}

//Iteração com o layout

const clearFildes = () => {
    const campos = document.querySelectorAll('.modal-field');
    campos.forEach(field => field.value = '');
}

const salveClient = () =>{
    if(isValidFilds()){
        const client ={
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            cidade: document.getElementById('cidade').value
        }

        createClient(client);
        updateTable();
        closeModal();
    }
}

const createRow = (client) => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
            <td>${client.nome}</td>
            <td>${client.email}</td>
            <td>${client.celular}</td>
            <td>${client.cidade}</td>
            <td>
                <button type="button" class="button green">editar</button>
                <button type="button" class="button red">excluir</button>
            </td>
    `
    document.querySelector('#tableClient>tbody').appendChild(newRow);
}

const clearTable = () => {
    const rows = document.querySelectorAll('#tableClient>tbody tr');
    rows.forEach(row =>{
     row.parentNode.removeChild(row);   
    })
}

const updateTable = () => {
    const dbClient = readClient();
    clearTable();
    dbClient.forEach(createRow);
}

updateTable()


//Eventos
document.getElementById('cadastrarCliente').addEventListener('click', openModal)

document.getElementById('modalClose').addEventListener('click', closeModal)

document.getElementById('salvar').addEventListener('click',salveClient);
document.getElementById('cancelar').addEventListener('click',closeModal);