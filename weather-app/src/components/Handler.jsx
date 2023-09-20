import weather from "../assets/temperature-feels-like.svg";
import humidity from "../assets/low-humidity.svg"

function Handler(props) {

    const obj = props.obj;
    const forecast = props.forecast;

    if (props.obj === null) {
        return <h1>Fetching...</h1>
    }

    return(
        <div className="weather main">
            <div className="weather general">
                <div className="general__weather">
                    <span className="icon">{obj.current.temp_c > 16 ? 
                    <i class="bi bi-thermometer-sun"></i> :
                    <i class="bi bi-thermometer-snow"></i>}</span>
                    <span className="text">{obj.current.temp_c}°C</span>
                </div>
                <h1>{obj.location.name}</h1>
                <h3>{obj.location.region}, {obj.location.country}</h3>
                <h3 className="general tz">{obj.location.tz_id}</h3>
                <h3 className="general lu">Last Updated {obj.current.last_updated}</h3>
            </div>
            <ul className="weather extra">
                <li className="extra__li condition">
                    <span className="icon"><img src={obj.current.condition.icon} 
                    alt={obj.current.condition.text} /></span>
                    <span className="txt">{obj.current.condition.text}</span>
                </li>
                <li className="extra__li">
                    <span className="icon"><img src={weather} 
                    alt="person standing next to termomether" /></span>
                    <span className="txt">{obj.current.feelslike_c}°C</span>
                </li>
                <li className="extra__li">
                    <span className="icon"><img src={humidity} alt="humidity icon" /></span>
                    <span className="txt">{obj.current.humidity}%</span>
                </li>
                <li className="extra__li">
                    <span className="icon"><i class="bi bi-wind"></i></span>
                    <span className="txt">{obj.current.wind_kph}K/PH</span>
                </li>
            </ul>

        </div>
    )
}

export default Handler;