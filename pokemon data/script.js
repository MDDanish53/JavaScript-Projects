const apiUrl = " https://pokeapi.co/api/v2/pokemon/";
const pokemonImg = "https://img.pokemondb.net/artwork/";
const Img = document.querySelector(".PokemonImg");
const searchBox = document.querySelector(".input .search");
const searchBtn = document.querySelector(".input .search-button");
const nationalNo = document.querySelector(".national-no");
const type = document.querySelector(".type");
const height = document.querySelector(".height");
const weight = document.querySelector(".weight");
const species = document.querySelector(".species");
const errMsg = document.querySelector(".err-msg");
const container = document.querySelector(".info");
const err = document.querySelector(".err");

async function getPokemonData(data) {
    const response = await fetch(apiUrl + `${(data).toLowerCase()}`);
    if(response.status === 404) {
        errMsg.style.display = "block";
        err.innerText = "Pokemon name is invalid!"
        container.style.display = "none"; 
    } else {
        var data= await response.json();
        console.log(data);
        Img.src = `https://img.pokemondb.net/artwork/${searchBox.value}.jpg`;
        nationalNo.innerText = data.id;
        type.innerText = data.types[0].type.name;
        species.innerText = data.species.name;
        height.innerText = data.height/10 + "m";
        weight.innerText = data.weight/10 + "kg";
        container.style.display = "block"; 
    }
}

searchBtn.addEventListener("click", () => {
    if(searchBox.value === "") {
        errMsg.style.display = "block";
        container.style.display = "none";
        err.innerText = "Please enter a pokemon name!";
    } else {
        getPokemonData(searchBox.value);
        errMsg.style.display = "none";
    }
});

