const temperatureElement = document.getElementById('temperature');
const windspeedElement = document.getElementById('windspeed');
const windchillElement = document.getElementById('windchill');

function calculateWindChill(temperature, windspeed) {
  if (temperature <= 50 && windspeed > 3.0) {
    const windChill = 35.74 + (0.6215 * temperature) - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temperature * Math.pow(windspeed, 0.16);
    return windChill.toFixed(2);
  } else {
    return "N/A";
  }
}

window.addEventListener('load', () => {
  const temperature = parseFloat(temperatureElement.textContent);
  const windspeed = parseFloat(windspeedElement.textContent);

  const windChillValue = calculateWindChill(temperature, windspeed);
  windchillElement.textContent = windChillValue;
});
