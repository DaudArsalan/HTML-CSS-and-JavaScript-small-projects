const cityName = document.getElementById("city-name");
const cloudUpdates = document.getElementById("clouds-update");
const icon = document.querySelector("img");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

const input = document.getElementById("input");
const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", () => {
  getData()
    .then((data) => {
      cityName.innerText = data.name;
      cloudUpdates.innerText = data.weather[0].description;
      icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      temperature.innerText = `${Math.round(data.main.temp)} \u00B0C`;
      humidity.innerHTML = ` <i class="fa-solid fa-droplet"></i>
    <p id="humidity-section"> Humidity: ${data.main.humidity}%</p>`;
      wind.innerHTML = ` <i class="fa-solid fa-wind"></i>
    <p id="wind-section">Wind: ${data.wind.speed}km/h</p>
    `;
    })
    .catch(() => {
      cityName.innerText = "Couldn't Find The City";
      cloudUpdates.innerText = "";
      icon.src = "";
      temperature.innerText = "";
      humidity.innerHTML = "";
      wind.innerHTML = "";

      setTimeout(() => {
        cityName.innerText = "";
      }, 3000);
    });

  input.value = "";
});

async function getData() {
  const key = "f77bb2c9151b60b0bb87428dabe208b6";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${key}`;
  const response = await fetch(url);
  const users = await response.json();
  return users;
}
