import rain from "../assets/rain.gif"


function Header() {
    return(
        <header>
                <img src={rain} alt="rain gif"/>
                <div className="header__main">
                    <i class="bi bi-cloud-sun"></i>
                    <h1>Weather Peek</h1>
                </div>
        </header>
    )
}

export default Header;