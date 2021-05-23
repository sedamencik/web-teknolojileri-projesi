let key = "1daf7993"

const input = document.querySelector("#input");
const button = document.querySelector("#button");
const next = document.querySelector(".nextposter");
const prev = document.querySelector(".nextposter");

let value = "";
let pagenr = 1;

input.addEventListener("input", (e) => {
    e.preventDefault();
    value = input.value;
});

button.addEventListener("click", () => {
    pagenr = 1;
    getmovie(value, pagenr);
});

async function getmovie(value, pagenr) {
    if (value === "") return;
    const data = await fetch(`http://www.omdbapi.com/?apikey=${key}&s=${value}&page=${pagenr}`);
    document.querySelector(".display").innerHTML = "";
    const result = await data.json();
    result.Search.forEach((item) => {
        let moviediv = document.createElement("div");
        moviediv.classList.add("movie");
        let poster = document.createElement("div");
        poster.classList.add("poster");
        let img = document.createElement("img");
        img.src = `${item.Poster}` === "N/A" ? (img.src = "./img/img.bulunamadi.jpg") : `${item.Poster}`;
        poster.appendChild(img);
        moviediv.appendChild(poster);

        let description = document.createElement("div");
        description.classList.add("description");
        description.innerHTML = `Adı: : ${item.Title}<br><br>Yılı : ${item.Year}<br><br> <a href= https://www.imdb.com/title/${item.imdbID}> IMDB : https://www.imdb.com/title/${item.imdbID}</a>`;

        moviediv.appendChild(description);

        document.querySelector(".display").appendChild(moviediv);
    });
}