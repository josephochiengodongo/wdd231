const weatherData = document.getElementById('weather-data');

const apiKey = 'a6e409f07328528be70f230d13f2a5a8'; // 🔑 replace this
const city = 'Nairobi';

const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

async function getWeather() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data); // debug

    const current = data.list[0];

    let output = `
      <p><strong>Temperature:</strong> ${current.main.temp}°C</p>
      <p><strong>Condition:</strong> ${current.weather[0].description}</p>
      <h3>3-Day Forecast</h3>
    `;

    // 3-day forecast (every 8th = 24 hrs)
    for (let i = 1; i <= 3; i++) {
      const day = data.list[i * 8];
      const date = new Date(day.dt_txt).toLocaleDateString();

      output += `
        <p>${date}: ${day.main.temp}°C</p>
      `;
    }

    weatherData.innerHTML = output;

  } catch (error) {
    console.error("Weather error:", error);
    weatherData.innerHTML = "<p>Unable to load weather data</p>";
  }
}

// ✅ CALL FUNCTION
getWeather();