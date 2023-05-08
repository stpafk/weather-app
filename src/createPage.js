

function landingPage() {

    const content = document.querySelector("#content");

    const nav = document.createElement('nav');
    nav.classList = "nav-bar";

    const navH1 = document.createElement('h1');
    navH1.classList = "nav-bar title";
    navH1.innerHTML = "Weather App";
    nav.appendChild(navH1);

    const main = document.createElement('main');

    const mainContainer = document.createElement('div');
    mainContainer.classList = "weather-container";
    main.appendChild(mainContainer);

    const innerContainer = document.createElement('div');
    innerContainer.classList = "inner-container";
    mainContainer.appendChild(innerContainer);

    const inputCity = document.createElement("input");
    inputCity.type = "text";
    inputCity.classList = "input-city";
    inputCity.placeholder = "Which city?"

    innerContainer.appendChild(inputCity);

    const divSearch = document.createElement("div");
    divSearch.classList = "search";
    divSearch.style = "cursor: pointer";
    divSearch.innerHTML = "";

    innerContainer.appendChild(divSearch);

    // add more features, for now keep only temperature and city

    const displayCondition = document.createElement('p');
    displayCondition.classList = "condition";
    
    innerContainer.appendChild(displayCondition);

    const displayCity = document.createElement('h1');
    displayCity.classList = "city-name";

    innerContainer.appendChild(displayCity);

    const divDisplayTemperature = document.createElement('div');
    divDisplayTemperature.classList = "temperature-div";

    innerContainer.appendChild(divDisplayTemperature);

    const temperature = document.createElement('h1');
    temperature.classList = "temperature-display";

    divDisplayTemperature.appendChild(temperature);

    const footer = document.createElement('footer');

    content.appendChild(nav);
    content.appendChild(main);
    content.appendChild(footer);

    return content
    
}

export default landingPage;