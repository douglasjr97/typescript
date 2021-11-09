"use strict";
fetch('https://swapi.dev/api/people/1/').then((res) => res.json())
    .then(personagem => personagem.films)
    .then(films => fetch(films[1]))
    .then(resFilm => resFilm.json())
    .then(filme => console.log(filme.title));
//# sourceMappingURL=abertura.js.map