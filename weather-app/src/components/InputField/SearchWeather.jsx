import { useEffect } from "react";
import "./searchweather.css";

function Weather() {
    const API_KEY = "8be1860db359470181e104408231505";
    let API_CITY = "Budapest";

    useEffect(()=> {
        getFetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${API_CITY}`)

    },[])

    async function getFetch(url) {
        const response = await fetch (url)
        const data = await response.json()

        return data
    }
        console.log(getFetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${API_CITY}`))
      

        


    return(
        <section className="container">
            <form >
                <input type="text" />
                <button>Search</button>
            </form>
        </section>
    )
}

export default Weather