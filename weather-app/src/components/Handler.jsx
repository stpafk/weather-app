import { useEffect, useState } from "react";

function Handler(props) {

    const obj = props.obj;

    if (props.obj === null) {
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