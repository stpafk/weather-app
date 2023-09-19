import Handler from "./Handler";
import { useState } from "react";

function App() {

    const [city, setCity] = useState("Medicine Hat");

    function changeState() {
        let city = document.querySelector(".container.input").value;
        setCity(city);
    }

    return(
        <>
          <header>
              <img src="https://img.icons8.com/?size=58&id=lnlY2wBk8BW5&format=png" alt="cloud image" />
              <h1>Weather App</h1>
          </header>
          <main>
              <section className="weather container">
                    <div className="container search">
                        <label htmlFor="search">Input the localization</label>
                        <input className="container input" type="text" placeholder="Example: New York"/>
                        <button onClick={changeState}>Search</button>
                    </div>
                    <Handler city={city}/>
              </section>
          </main>
          <footer>
              <div className="wrapper">
                  <p>Created By</p>
                  <a href="https://github.com/stpafk">stpafk</a>
                  <img src="https://avatars.githubusercontent.com/u/117909784?s=40&v=4" alt="stephan photo" />
              </div>
          </footer>
        </>
    )

}

export default App;