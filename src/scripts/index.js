async function renderizaPokemons() {
    const lista = document.querySelector(".pokemonList");

    const listaDePokemons = await consomePokeAPI();

    listaDePokemons.results.forEach(pokemon => {
        const numeroNaPokedex = pokemon.url.slice(34, -1);

        lista.insertAdjacentHTML("beforeend", `<li>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png" alt=${pokemon.name}>
        <h3>${pokemon.name[0].toUpperCase()}${pokemon.name.substring(1)}</h3></li>`)

    
    });
}

async function searchPokemon(searchWord){
    const input = document.querySelector("#search");
    const searchBtn = document.querySelector(".searchBtn");
    const list = document.querySelector(".pokemonList");
    searchWord = input.value

    searchBtn.addEventListener("click", (event) => {
        list.innerHTML = "";
        console.log(searchWord)
    })

    const listaDePokemons = await consomePokeAPI();

    listaDePokemons.results.forEach(pokemon => {
        if(pokemon.name.includes(searchWord)){
            const numeroNaPokedex = pokemon.url.slice(34, -1);
            list.insertAdjacentHTML("beforeend", `<li>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png" alt=${pokemon.name}>
        <h3>${pokemon.name[0].toUpperCase()}${pokemon.name.substring(1)}</h3></li>`)

        }

    });

}

renderizaPokemons();