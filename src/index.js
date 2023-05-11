import landingPage from "./createPage"
import requestData from "./request";
import './style.css'


document.body.appendChild(landingPage());
requestData("Medicine Hat");
const input = document.querySelector('.input-city');
const searchBar = document.querySelector('.search');

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        if (input.value !== 0) {
            let data = input.value;
            input.value = "";
            requestData(data);
        }
    }
})

searchBar.addEventListener("click", function() {
    console.log('not yet')
})