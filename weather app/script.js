const apiKey = "2244b8b3e126d3298bf183f3645c0c89";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const container = document.querySelector(".weather");
const cityName = document.querySelector(".city");
const temperature = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const errMsg = document.querySelector(".error");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status === 404) {
        errMsg.style.display = "block";
        container.style.display = "none";
    } else {
        var data = await response.json();

        cityName.innerHTML = data.name;
        temperature.innerHTML = Math.round(data.main.temp) + "°c";
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + " km/h";
    
        let weather = (data.weather[0].main).toLowerCase();
        weatherIcon.src = `images/${weather}.png`;
    
        container.style.display = "block";
        errMsg.style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    if(searchBox.value === "") {
        errMsg.style.display = "block";
        document.querySelector(".err-p").innerText = "Please enter a city name";
        container.style.display = "none";
    } else {
    checkWeather(searchBox.value);
    }
});
