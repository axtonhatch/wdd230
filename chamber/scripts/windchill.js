// DOM elements
const temperatureElement = document.getElementById('temperature');
const weatherDescriptionElement = document.getElementById('weather-description');
const threeDayForecastElement = document.getElementById('three-day-forecast');
const meetGreetBanner = document.getElementById('meetGreetBanner');

// Fetch weather data from OpenWeatherMap API
function fetchWeatherData() {
  const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=40.234&lon=-111.659&units=imperial&appid=1ee773b191e6894fe565bfd075600b87`;
  const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=40.234&lon=-111.659&units=imperial&appid=1ee773b191e6894fe565bfd075600b87`;

  // Fetch current weather data
  fetch(currentWeatherURL)
    .then(response => response.json())
    .then(data => {
      const currentTemperature = data.main.temp;
      const weatherDescription = data.weather[0].description;

      temperatureElement.textContent = `Temperature: ${currentTemperature}°C`;
      weatherDescriptionElement.textContent = `Weather Description: ${weatherDescription}`;
    })
    .catch(error => console.error('Error fetching current weather:', error));

  // Fetch three-day forecast
  fetch(forecastURL)
    .then(response => response.json())
    .then(data => {
      const forecast = data.list.slice(0, 8); // Select the first 8 entries (3 days with 3-hour intervals)

      const threeDayTemperatures = forecast.map(entry => entry.main.temp);
      const minTemperature = Math.min(...threeDayTemperatures);
      const maxTemperature = Math.max(...threeDayTemperatures);

      threeDayForecastElement.textContent = `Three-day Forecast: Min ${minTemperature}°C, Max ${maxTemperature}°C`;
    })
    .catch(error => console.error('Error fetching forecast:', error));
}

// Check if it's Monday, Tuesday, or Wednesday
const today = new Date().getDay();
if (today >= 1 && today <= 3) {
  meetGreetBanner.style.display = 'block';
}


function closeBanner() {
meetGreetBanner.style.display = 'none';
}


// Call the function when the page loads
window.addEventListener('load', fetchWeatherData);