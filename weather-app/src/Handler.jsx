import { useEffect, useState } from "react";


function Handler(props) {

    const [temp, setTemp] = useState(0);

    useEffect(() => {
        fetch(`https://api.weatherapi.com/v1/current.json?key=ac11e311dc59479c849114218230505&q=${props.city}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setTemp(data.current.temp_c)
        })
    })
    
    return(
        <h1>{temp}</h1>
    )
}

export default Handler;