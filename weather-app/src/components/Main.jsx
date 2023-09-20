import { useEffect, useState } from "react";
import Handler from "./Handler";

function Main() {

    const [city, setCity] = useState("Medicine Hat");
    const [obj, setObj] = useState(null)

    useEffect(() => {
        fetch(`https://api.weatherapi.com/v1/current.json?key=ac11e311dc59479c849114218230505&q=${city}`)
        .then((response) => response.json())
        .then((data) => {
            setObj({...data})})
    }, [city])

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
                    <Handler obj={obj}/>
              </section>
          </main>
    )

}

export default Main;