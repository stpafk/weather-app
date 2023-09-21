import { useEffect, useState } from "react";
import Handler from "./Handler";

function Main() {

    const [city, setCity] = useState("Medicine Hat");
    const [obj, setObj] = useState(null)
    const [error, setError] = useState("")

    function handleError(response) {
        if (!response.ok) {
            setError("error")
            throw Error(response.statusText);
        }

        setError("")
        return response
    }

    useEffect(() => {
        fetch(`https://api.weatherapi.com/v1/current.json?key=ac11e311dc59479c849114218230505&q=${city}`)
        .then(handleError)
        .then((response) => response.json())
        .then((data) => {
            setObj({...data})
            console.log(data)
            return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric%cnt=3&appid=1b03a67987404c2ea16169c823e9c21d`)
        })
        .then((response) => response.json())
        .then((data) => {
            setForecast(data);
        })
    }, [city])

    function changeState() {
        let city = document.querySelector(".container.input").value;
        setCity(city);
    }

    return(
        <main>
              <section className="weather container">
                    <div className="container search">
                        <label htmlFor="search">Input localization: </label>
                        <input className="container input" id={error} type="text" placeholder="Example: New York"/>
                        <button onClick={changeState}><i class="bi bi-search"></i></button>
                    </div>
                    <Handler obj={obj}/>
              </section>
          </main>
    )

}

export default Main;