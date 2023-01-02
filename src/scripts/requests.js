async function consomePokeAPI() {
    const loading = document.querySelector('#loading');
    const searchBar = document.querySelector("#searchBar");

    const pokemonsDaAPI = await fetch('https://pokeapi.co/api/v2/pokemon')
      .then(
        response => response.json()
      )
      .catch(
        error => console.log(error)
      )

    loading.classList.add('hidden')
    searchBar.style = "display: flex;"

    return pokemonsDaAPI
}

consomePokeAPI()