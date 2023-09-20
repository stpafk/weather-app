import { useEffect, useState } from "react";

function Handler(props) {

    const obj = props.obj;
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${obj === null ? "Medicine Hat" : obj.city}&units=metric&appid=1b03a67987404c2ea16169c823e9c21d`)
            .then((response) => response.json())
            .then((data) => {
                setForecast(data);
                console.log(data)
            })
    }, [])

    if (props.obj === null) {
        return <h1>Fetching...</h1>
    }

    return(
        <div className="general__info">
            <h1>{obj.location.name}</h1>
            <h3>{obj.location.region}, {obj.location.country}</h3>
            <h1>{obj.current.temp_c}°C</h1>

            <h1></h1>
        </div>
    )
}

export default Handler;