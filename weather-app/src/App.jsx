import Handler from "./Handler";

function App() {

    return(
        <>
          <header>
              <img src="https://img.icons8.com/?size=58&id=lnlY2wBk8BW5&format=png" alt="cloud image" />
              <h1>Weather App</h1>
          </header>
          <main>
              <section className="weather container">
                    <Handler />
              </section>
          </main>
          <footer>
              <div className="wrapper">
                  <p>Created By</p>
                  <a href="https://github.com/stpafk">stpafk</a>
                  <img src="https://avatars.githubusercontent.com/u/117909784?s=40&v=4" alt="stephan photo" />
              </div>
          </footer>
        </>
    )

}

export default App;