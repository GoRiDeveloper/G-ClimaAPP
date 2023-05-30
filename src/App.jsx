import { useEffect, useState } from "react";
import { MainLayout } from "./layouts/main_layout/MainLayout";
import { WeatherContainer } from "./components/WeatherContainer";
import axios from "axios";

export function App () {

    const 
    
    [darkMode, setDarkMode] = useState(false),
    [weather, setWeather]   = useState(null),
    [loader, setLoader]     = useState(true),
    [error, setError]       = useState(null),

    handleTheme = () => {

        if (darkMode) {

            document.body.classList.remove("theme--dark");
            setDarkMode(false);

        } else {

            document.body.classList.add("theme--dark");
            setDarkMode(true);

        };

    },

    handleSubmit = (e) => {

        e.preventDefault();

        setLoader(true);

        const 
        
        VALUE   = e.target.search.value,
        API_KEY = import.meta.env.VITE_API_WEATHER_KEY,
        URL     = `https://api.openweathermap.org/data/2.5/weather?q=${VALUE}&appid=${API_KEY}`;

        axios.get(URL)
            .then(
                ({data}) => 
                    setWeather(data)
            )
            .catch(
                ({ message, response }) => {

                    const ERR_OBJ = {
                        message,
                        status: response.status
                    };
                    setError(ERR_OBJ);
                }
            )
            .finally(() => setLoader(false));

    },

    getPositionAndWeather = ({ coords }) => {
    
        const 
        
        LAT     = coords.latitude,
        LON     = coords.longitude,
        API_KEY = import.meta.env.VITE_API_WEATHER_KEY,
        URL     = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}`;

        axios.get(URL)
            .then(
                ({ data }) => 
                    setWeather(data)
            )
            .catch(
                ({ message, response }) => {

                    const ERR_OBJ = {
                        message,
                        status: response.status
                    };
                    setError(ERR_OBJ);
                }
            )
            .finally(() => setLoader(false));
    
    };

    useEffect(
        () => 
            navigator.geolocation.getCurrentPosition(getPositionAndWeather), []
    );

    return (

        <MainLayout
            darkMode={darkMode} 
            loader={loader}
            handleTheme={handleTheme} 
            handleSubmit={handleSubmit}
        >
            <WeatherContainer 
                darkMode={darkMode}
                weather={weather}
                error={error}
                setError={setError}
            />
        </MainLayout>

    );

};