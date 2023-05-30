import { RectangleTrapezoid } from "./RectangleTrapezoid";
import { kelvinToCelsius, kelvinToFahrenheit } from "../utils/temp";

export function Weather ({ darkMode, isCelsius, weather }) {

    const controllerImage = (icon) => {

        const 
        
        generalIcons = ["03", "04", "10", "11", "13", "50"],
        numberIcon   = icon.slice(0, 2);

        if (generalIcons.includes(numberIcon))
            return numberIcon;

        return icon;

    };

    return (

        <div className="infoWeather">

            <RectangleTrapezoid darkMode={darkMode} />

            <section className="infoWeather__box">

                <h2 className="infoWeather__degree"> { 

                    isCelsius 
                        ? kelvinToCelsius(weather?.main.temp) 
                        : kelvinToFahrenheit(weather?.main.temp) 

                } </h2>
                <div className="infoWeather__info">

                    <p> VIENTO : {weather?.wind.speed} m/s </p>
                    <p> NUBES : {weather?.clouds.all} % </p>
                    <p> PRESIÓN : {weather?.main.pressure} hPa </p>

                </div>
                {
                    weather?.weather[0].icon
                        ? (
                            <img 
                                className="infoWeather__image" 
                                src={`/assets/img/icons/${controllerImage(weather?.weather[0].icon)}.svg`} 
                                alt="clima actual" 
                            />
                        )
                        : null
                }
                <h3 className="infoWeather__location"> 
                    { weather?.name }, 
                    { weather?.sys.country } 
                </h3>
                <p className="infoWeather__weather"> { weather?.weather[0].description } </p>

            </section>
            
        </div>

    );

};