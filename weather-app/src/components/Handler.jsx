import { useEffect, useState } from "react";

function Handler(props) {
    
    const [obj, setObj] = useState(null)

    useEffect(() => {
        fetch(`https://api.weatherapi.com/v1/current.json?key=ac11e311dc59479c849114218230505&q=${props.city}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setObj({...data})})
    }, [props.city])

    if (obj === null) {
        return <h1>Fetching...</h1>
    }

    return(
        <div className="general__info">
            <h1>{obj.location.name}</h1>
            <h3>{obj.location.region}, {obj.location.country}</h3>
            <h1>{obj.current.temp_c}°C</h1>
        </div>
    )
}

export default Handler;