const url = 'https://randomuser.me/api/';
const campoImg = document.getElementById('containerimg');
const campoInfo = document.getElementById('informacoes');



//Gerando usuário e pegando suas informações

const criarUsuario = (usuario) =>{
    campoImg.textContent = '';
    campoInfo.textContent = '';

    //guardando os dados
    const foto = usuario.picture.large;
    const nome = `${usuario.name.first} ${usuario.name.last}`;
    const idade = usuario.dob.age;

    let genero;

    if(usuario.gender == 'male'){
         genero = 'M';
    }else{
         genero = 'F';
    }
    
    const celular = usuario.cell;
    const email = usuario.email;
    const cidade = usuario.location.city;

    //Criar os elementos dos dados

    const fotoElement = document.createElement('img');
    fotoElement.src = foto;

    const nomeElement = document.createElement('p');
    nomeElement.innerHTML = `<span>Nome: </span>${nome}`;

    const idadeElement = document.createElement('p');
    idadeElement.innerHTML = `<span>Idade: </span>${idade}`;

    const generoElement = document.createElement('p');
    generoElement.innerHTML = `<span>Gênero: </span>${genero}`;

    const celularElement = document.createElement('p');
    celularElement.innerHTML = `<span>Cell: </span>${celular}`;

    const emailElement = document.createElement('p');
    emailElement.innerHTML = `<span>E-mail: </span>${email}`;

    const cidadeElement = document.createElement('p');
    cidadeElement.innerHTML = `<span>Cidade: </span>${cidade}`;

    campoImg.appendChild(fotoElement);
    campoInfo.appendChild(nomeElement);
    campoInfo.appendChild(idadeElement);
    campoInfo.appendChild(generoElement);
    campoInfo.appendChild(celularElement);
    campoInfo.appendChild(emailElement);
    campoInfo.appendChild(cidadeElement);
}


//Pegando dados e mandando criar o usuário

async function gerandoUsuario(){
    const response = await fetch(url);
    const data = await response.json();

    
    
    criarUsuario(data.results[0]);
}

document.getElementById('botao').addEventListener('click',gerandoUsuario);
