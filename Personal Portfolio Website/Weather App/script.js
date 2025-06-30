async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "0dd16d4d3aaebc1f21a1211e33e8c39f"; // Get yours from openweathermap.org
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const weatherInfo = document.getElementById("weatherInfo");
  weatherInfo.innerHTML = "Loading...";

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    const icon = data.weather[0].icon;
    const temp = data.main.temp;
    const desc = data.weather[0].description;
    const humidity = data.main.humidity;
    const wind = data.wind.speed;

    weatherInfo.innerHTML = `
      <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather icon" />
      <h2>${data.name}</h2>
      <p><strong>${desc}</strong></p>
      <p>🌡️ Temperature: ${temp}°C</p>
      <p>💧 Humidity: ${humidity}%</p>
      <p>🌬️ Wind Speed: ${wind} m/s</p>
    `;
  } catch (error) {
    weatherInfo.innerHTML = `<p style="color: red;">${error.message}</p>`;
  }
}
