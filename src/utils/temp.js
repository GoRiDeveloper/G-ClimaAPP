export const kelvinToCelsius = 
    (tempK) => `${(tempK - 273.15).toFixed(1)} °C`;

export const kelvinToFahrenheit = 

    (tempK) => `${

        (
            
            (tempK - 273.15) * (9/5) + 32

        ).toFixed(1)
    
    } °F`;