
async function requestData(data) {

    await fetch(`https://api.weatherapi.com/v1/current.json?key=ac11e311dc59479c849114218230505&q=${data}`)
    .then(async function(response) {
        
        return await response.json();
    })
    .then(function(response) {
        const temp = document.querySelector(".temperature-display");
        const cond = document.querySelector(".condition");
        const cit = document.querySelector(".city-name");
        const lastUpdate = document.querySelector(".last-update");
        const imgDiv = document.querySelector(".image");

        cond.innerHTML = `${response.current.condition.text}`;
        cit.innerHTML = `${response.location.name}-${response.location.country}`
        temp.innerHTML =  `${response.current.temp_c}°C`;
        lastUpdate.innerHTML = `Last updated: ${response.current.last_updated.slice(10, 16)} TZ: (${response.location.tz_id})`
        imgDiv.src = `https:${response.current.condition.icon}`
    })
    .catch(function(error) {
        console.log(error);
    })

}

export default requestData;