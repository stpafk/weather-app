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
            console.log(obj.current.condition.icon.slice(34))
        })
    }, [city])

    function changeState() {
        let city = document.querySelector(".container.input").value;
        setCity(city);
    }

    return(
        <main>
              <section className="weather container">
              <img src={obj ? `//cdn.weatherapi.com/weather/128x128${obj.current.condition.icon.slice(34)}` : ""} alt="condition" />
                    <form className="container search" onSubmit={() => event.preventDefault()}>
                        <label htmlFor="search">Input localization: </label>
                        <input className="container input" id={error} type="text" placeholder="Example: New York"/>
                        <button onClick={changeState} type="submit"><i class="bi bi-search"></i></button>
                    </form>
                    <Handler obj={obj}/>
              </section>
          </main>
    )

}

export default Main;