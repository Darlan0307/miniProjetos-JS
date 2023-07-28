const campoDados = document.getElementById('campodados');

const getData = (data) =>{
    const rua = data.address;
    const distrito = data.district;
    const estado = data.state;
    const cidade = data.city;
    const ddd = data.ddd;
    const ibge = data.city_ibge;

    document.getElementById('rua').textContent = rua;
    document.getElementById('distrito').textContent = distrito;
    document.getElementById('estado').textContent = estado;
    document.getElementById('cidade').textContent = cidade;
    document.getElementById('ddd').textContent = ddd;
    document.getElementById('ibge').textContent = ibge;

    
    campoDados.classList.remove('hide')
    
    document.getElementById('cep').value = '';
    document.getElementById('cep').focus();
}

async function getCep() {
    try {
        const cep = document.getElementById('cep').value;
        const url = `https://cep.awesomeapi.com.br/json/${cep}`;
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            getData(data);
        } else {

            if( response.status == 400 ){
                campoDados.classList.add('hide')
                alert("CEP inválido")
            }else if(response.status == 404){
                campoDados.classList.add('hide')           
                alert(`O CEP ${cep} não foi encontrado`) 
            }
        }
    } catch (error) {
        console.error('Erro na chamada da API:', error);        
    }
}

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    getCep();
});

document.getElementById('ico').addEventListener('click',function(){
    alert('Digite seu CEP abaixo')
})
