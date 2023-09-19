import { useEffect, useState } from "react";
import Handler from "./Handler";

function Main() {

    const [city, setCity] = useState("Medicine Hat");

    function changeState() {
        let city = document.querySelector(".container.input").value;
        setCity(city);
    }

    return(
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
    )

}

export default Main;