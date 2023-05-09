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

    const search = document.createElement('div');
    search.classList = "searchDiv";
    
    innerContainer.appendChild(search);

    const labelSearch = document.createElement('label');
    labelSearch.classList = "input-label";
    labelSearch.innerHTML = "Input your localization: "

    search.appendChild(labelSearch);

    const inputCity = document.createElement("input");
    inputCity.type = "text";
    inputCity.classList = "input-city";
    inputCity.placeholder = "Which city?"

    search.appendChild(inputCity);

    const divSearch = document.createElement("div");
    divSearch.classList = "search";
    divSearch.style = "cursor: pointer";
    divSearch.innerHTML = "";

    search.appendChild(divSearch);


    const displayCondition = document.createElement('div');
    displayCondition.classList = "div-condition";
    
    const conditionP = document.createElement('p');
    conditionP.classList = "condition";

    displayCondition.appendChild(conditionP);

    const img = document.createElement('i');
    img.src = "https://cdn.weatherapi.com/weather/64x64/day/116.png";
    displayCondition.appendChild(img);

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

    const lastUpdate = document.createElement('h6');
    lastUpdate.classList = "last-update";

    divDisplayTemperature.appendChild(lastUpdate);

    const footer = document.createElement('footer');

    const footerText = document.createElement('p');
    footerText.classList = "footer-text";
    footer.innerHTML = "Created by stpafk"

    const footerA = document.createElement('a');
    footer.appendChild(footerA);
    footer.appendChild(footerText)

    content.appendChild(nav);
    content.appendChild(main);
    content.appendChild(footer);

    return content
    
}

export default landingPage;