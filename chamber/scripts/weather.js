const weatherData = document.getElementById('weather-data');

const apiKey = 'YOUR_API_KEY';
const city = 'Nairobi';

const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

async function getWeather() {
    const response = await fetch(url);
    const data = await response.json();

    const current = data.list[0];

    weatherData.innerHTML = `
        <p>Temperature: ${current.main.temp}°C</p>
        <p>${current.weather[0].description}</p>
    `;
}

getWeather();