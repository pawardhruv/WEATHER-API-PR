const apiKey = "2f7c35f690f9fb8993ea2674fc590f63";

function findWeather() {
    
    const searchInput = document.getElementById("cityName");
    const resultArea = document.getElementById("info-box");

    if (searchInput.value === "") {
        alert("Enter a city name!");
        return;
    }

    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(result => {
            console.log("Weather Data:", result);

            const currentTemp = result.main.temp;

            // Output dikhane ka style thoda badal diya
            resultArea.innerHTML = `City: ${searchInput.value} <br> Temp: ${currentTemp}°C`;
        });
}