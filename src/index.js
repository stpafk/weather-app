import landingPage from "./createPage"

document.body.appendChild(landingPage());

const input = document.querySelector('.input-city');

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        console.log('ok')
    }
})