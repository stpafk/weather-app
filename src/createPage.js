function landingPage() {

    const content = document.querySelector("#content");

    const nav = document.createElement('nav');
    nav.classList = "nav-bar";

    const navImg = document.createElement('img');
    navImg.classList = "nav-img";
    navImg.src = "https://img.icons8.com/?size=58&id=lnlY2wBk8BW5&format=png";

    nav.appendChild(navImg);

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

    const img = document.createElement('img');
    img.classList = "image"
    img.src = "";
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
    footerText.innerHTML = "Created by ";

    const footerA = document.createElement('a');
    footerA.classList = "github-name";
    footerA.style = "padding-left: 3px; color:white;";
    footerA.href = "https://github.com/stpafk";
    footerA.innerHTML = "stpafk";

    const footerImg = document.createElement('img');
    footerImg.classList = "git-hub-img";
    footerImg.style = "height: 60%; padding-left: 5px; border:none; border-radius: 20px;";
    footerImg.src = "https://avatars.githubusercontent.com/u/117909784?s=40&v=4";


    footer.appendChild(footerText);
    footer.appendChild(footerA);
    footer.appendChild(footerImg);

    content.appendChild(nav);
    content.appendChild(main);
    content.appendChild(footer);

    return content
    
}

export default landingPage;