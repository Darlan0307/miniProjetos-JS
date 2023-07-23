const APIKey = 'live_N2McDT9FLCv7hUa3ui49snPYXxEnT3GTl2El2rxtK7kri8chJEeURsx1PIacYD6L';
const url = `https://api.thecatapi.com/v1/images/search?api_key=${APIKey}`;

const criandoImagem = (link) => {
    const campoImgagem = document.querySelector('.campo-img');
    campoImgagem.textContent = '';
    const imagem = document.createElement('img');
    imagem.src = link;
    campoImgagem.appendChild(imagem);
}

async function imagemAleatoria (){
    try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        
        criandoImagem(data[0].url);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
}

document.getElementById('botao').addEventListener('click',imagemAleatoria);
