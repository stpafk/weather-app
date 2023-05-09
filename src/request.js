
async function requestData(data) {

    await fetch(`https://api.weatherapi.com/v1/current.json?key=ac11e311dc59479c849114218230505&q=${data}`)
    .then(async function(response) {
        
        return await response.json();
    })
    .then(function(response) {
        const temp = document.querySelector(".temperature-display");
        const cond = document.querySelector(".condition");
        const cit = document.querySelector(".city-name");

        cond.innerHTML = `${response.current.condition.text}`;
        cit.innerHTML = `${response.location.name}-${response.location.country}`
        temp.innerHTML =  `${response.current.temp_c}°C`;
    })
    .catch(function(error) {
        console.log(error);
    })

}

export default requestData;