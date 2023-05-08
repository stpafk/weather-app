import landingPage from "./createPage"

document.body.appendChild(landingPage());

const input = document.querySelector('.input-city');
const searchBar = document.querySelector('.search');

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        console.log('not yet')
    }
})

searchBar.addEventListener("click", function() {
    console.log('not yet')
})