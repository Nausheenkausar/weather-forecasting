const weatherContainer = document.getElementById("weather-div");
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const apiKey = "3f18a2a0df29600f5ffd54fd07ca934c";
const tempinfo=document.getElementById("temp-value");
function displayWeather() {
    const city = searchInput.value;
    console.log("clicked");
    console.log(city);
    weatherContainer.style.display = "block";
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    fetch(api)
        .then((response) => response.json())
        .then((data) => {
            // Handle the weather data here
            console.log(data);
            console.log(data.main.temp);
            tempinfo.textContent=data.main.temp;
        })
        .catch((error) => {
            console.error("Error fetching weather data:", error);
        });
}

searchBtn.addEventListener("click", displayWeather);
