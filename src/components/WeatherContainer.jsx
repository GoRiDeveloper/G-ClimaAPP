import { useState } from "react";
import { Weather } from "./Weather";
import { Error } from "./Error";

export function WeatherContainer ({ darkMode, weather, error, setError }) {

    const 
    
    [isCelsius, setIsCelsius] = useState(false),

    handleTemp = () => {

        isCelsius
            ? setIsCelsius(false)
            : setIsCelsius(true);
            
    };

    return (

        <div className="weather">

            {
                error
                    ? ( <Error error={error} setError={setError} />)
                    : (
                        <>
                            <Weather darkMode={darkMode} isCelsius={isCelsius} weather={weather}/>
                            <button
                                className="weather__btn"
                                onClick={handleTemp}
                            >
                                Cambiar a {
                                    isCelsius
                                        ? "F°"
                                        : "C°"
                                }
                            </button>
                        </>
                    )
            }

        </div>

    );

};