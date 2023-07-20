const url = 'https://randomuser.me/api/';

async function gerandoUsuario(){
    const response = await fetch(url);
    const data = await response.json();


    console.log(data.results[0]);
}

gerandoUsuario();