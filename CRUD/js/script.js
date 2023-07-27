const getLocalStorage = () => JSON.parse(localStorage.getItem("dbFrases")) ?? [];
const setLocalStorage = (dbFrases) => localStorage.setItem('dbFrases',JSON.stringify(dbFrases));
const cleanLocalStorage = () => {
    localStorage.clear();
    const campo = document.querySelector('.campo');
    campo.textContent = '';
}


const criarTextos = (texto) =>{
    const dbFrases = getLocalStorage();
    dbFrases.push(texto);
    setLocalStorage(dbFrases);
}

const pegarTextos = () =>{
    const dbFrases = getLocalStorage();
    const campo = document.querySelector('.campo');
    campo.textContent = '';
    dbFrases.forEach(frase => {
        const paragrafo = document.createElement('p');
        paragrafo.textContent = frase.texto;
        campo.appendChild(paragrafo);
    });
}


const enviarTexto = () => {
    const textoInput = {
        texto: `${document.getElementById('texto').value}`
    }
    criarTextos(textoInput);
    pegarTextos();
}
pegarTextos();


document.getElementById('button').addEventListener('click',enviarTexto);
document.querySelector('.clear').addEventListener('click',cleanLocalStorage);
