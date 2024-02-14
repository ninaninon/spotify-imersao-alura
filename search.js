const searchInput = document.getElementById('search-input');
const resultsArtist = document.getElementById("result-artist");
const resultPlaylists = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylists.classList.add("hidden");
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach((element) => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });
    resultsArtist.classList.remove('hidden');
}
function hidePlaylists() {
    playlistContainer.classList.add("hidden");
}

document.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchInput === '') {
        resultPlaylists.classList.add('hidden');
        resultsArtist.classList.remove('hidden');
        return;
    }
    requestApi(searchTerm);
});