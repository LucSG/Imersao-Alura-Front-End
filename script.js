const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result, searchTerm)); // Passando searchTerm para displayResults
}

function displayResults(results, searchTerm) {
    resultPlaylist.classList.add("hidden");
    resultArtist.innerHTML = ''; // Limpa os resultados anteriores

    // Verifica se há resultados
    const filteredResults = results.filter(element => 
        element.name.toLowerCase().includes(searchTerm) || 
        element.genre.toLowerCase().includes(searchTerm) // Verifica o gênero também
    );

    if (filteredResults.length > 0) {
        // Se houver resultados, exibe todos os artistas encontrados
        filteredResults.forEach(element => {
            const artistCard = document.createElement('div'); // Cria um novo div para cada artista
            artistCard.classList.add('artist-card'); // Adiciona uma classe para estilização

            const artistName = document.createElement('h3'); // Cria um elemento para o nome do artista
            artistName.innerText = element.name;

            const artistImage = document.createElement('img'); // Cria um elemento para a imagem do artista
            artistImage.src = element.urlImg;

            artistCard.appendChild(artistName); // Adiciona o nome ao card
            artistCard.appendChild(artistImage); // Adiciona a imagem ao card
            resultArtist.appendChild(artistCard); // Adiciona o card à lista de resultados
        });

        // Remove a classe 'hidden' para mostrar os resultados
        resultArtist.classList.remove('hidden');
    } else {
        // Se não houver resultados, esconde a seção do artista
        resultArtist.classList.add('hidden');
    }
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.add('hidden'); // Escondendo também o resultado do artista
        return;
    }

    requestApi(searchTerm);
});