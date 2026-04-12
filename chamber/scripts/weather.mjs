const currentContainer = document.querySelector('#current-weather');
const forecastContainer = document.querySelector('#forecast-display');

const apiKey = 'a6e409f07328528be70f230d13f2a5a8';
const city = 'Nairobi';

const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

async function fetchWeather() {
  try {
    currentContainer.innerHTML = "<p>Loading weather...</p>";

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Weather data fetch failed");
    }

    const data = await response.json();
    displayWeather(data);

  } catch (error) {
    console.error(error);
    currentContainer.innerHTML = "<p>⚠️ Unable to load weather</p>";
    forecastContainer.innerHTML = "";
  }
}


function displayWeather(data) {
  const current = data.list[0];

  
  const description =
    current.weather[0].description.charAt(0).toUpperCase() +
    current.weather[0].description.slice(1);

  const iconSrc = `https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`;

  
  currentContainer.innerHTML = `
    <div class="weather-info">
      <img src="${iconSrc}" alt="${description}">
      <p><strong>Temperature:</strong> ${Math.round(current.main.temp)}°C</p>
      <p><strong>Condition:</strong> ${description}</p>
      <p><strong>Humidity:</strong> ${current.main.humidity}%</p>
    </div>
  `;

  
  forecastContainer.innerHTML = "";

  const dailyForecast = data.list
    .filter(item => item.dt_txt.includes("12:00:00"))
    .slice(0, 3);

  // Fallback if no exact 12:00 data
  if (dailyForecast.length === 0) {
    forecastContainer.innerHTML = "<p>No forecast available</p>";
    return;
  }

  dailyForecast.forEach(day => {
    const date = new Date(day.dt_txt);

    const dayName = date.toLocaleDateString('en-US', {
      weekday: 'long'
    });

    const div = document.createElement('div');
    div.classList.add('forecast-item');

    div.innerHTML = `
      <p><strong>${dayName}</strong></p>
      <p>${Math.round(day.main.temp)}°C</p>
    `;

    forecastContainer.appendChild(div);
  });
}


fetchWeather();







