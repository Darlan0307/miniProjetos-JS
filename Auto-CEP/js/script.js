
const campoCep = document.getElementById('cep')
const campoRua = document.getElementById('rua')
const campoBairro = document.getElementById('bairro')
const campoCidade = document.getElementById('cidade')
const campoEstado = document.getElementById('estado')


const getData = (data) =>{
    console.log(data);
    campoRua.value = data.address;
    campoBairro.value = data.district;
    campoCidade.value = data.city;
    campoEstado.value = data.state;
}

const consultarCEP = async(cep) => {
    try{
        const url = `https://cep.awesomeapi.com.br/json/${cep}`;
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            getData(data);
        }else{
            if( response.status == 400 ){
                campoCep.value = '';
                alert("CEP inválido")
            }else if(response.status == 404){
                campoCep.value = '';      
                alert(`O CEP ${cep} não foi encontrado`) 
            }
        }
    }catch(err){
        alert(`Erro na chamada da API:${err}`);
    }
}

const verificarValor = () =>{
    if(campoCep.value.length == 8){
        consultarCEP(campoCep.value)
    }
}

const isFieldFill = () => {
    return document.getElementById('form-container').reportValidity();
}

const mensagem = () => {
    if (isFieldFill()) {
        alert("Formulário enviado com sucesso!");
    }
}


document.getElementById('cep').addEventListener('keyup',verificarValor)

// document.getElementById('form-container').addEventListener('submit', (e) => {
//     e.preventDefault(); 
//     const campomsg = document.querySelector('.msg')
//     campomsg.classList.remove('hide')
// });







