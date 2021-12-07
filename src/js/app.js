import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");
  fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
  .then(response => response.json())
  .then(pokemonJSON => {
    for(let pokemon of pokemonJSON.results) {
      const li = document.createElement("li");
      li.innerText = pokemon.name;
      ul.appendChild(li);
    }
  });
});