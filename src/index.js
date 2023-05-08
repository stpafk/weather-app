import landingPage from "./createPage"
import requestData from "./request";


document.body.appendChild(landingPage());

const input = document.querySelector('.input-city');
const searchBar = document.querySelector('.search');

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let data = input.value;
        requestData(data);
        input.innerHTML = "";
    }
})

searchBar.addEventListener("click", function() {
    console.log('not yet')
})