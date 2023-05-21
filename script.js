function getWeather() {
    var city = document.getElementById("cityInput").value;
    var apiKey = 'b974e886e91a708f2fcaec63a8fff499';

    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var temp = Math.round(data.main.temp - 273.15);
            var weather = data.weather[0].description;
            var humidity = data.main.humidity;
            var windSpeed = data.wind.speed;
            var sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
            var sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

            document.getElementById("tempValue").textContent = temp;
            document.getElementById("weatherValue").textContent = weather;
            document.getElementById("humidityValue").textContent = humidity;
            document.getElementById("windValue").textContent = windSpeed;
            document.getElementById("sunriseValue").textContent = sunrise;
            document.getElementById("sunsetValue").textContent = sunset;
        })
        .catch(error => {
            console.log('Error:', error);
            var tableDataElements = document.querySelectorAll("#result td");
            tableDataElements.forEach(element => {
                element.textContent = "-";
            });
        });
}
