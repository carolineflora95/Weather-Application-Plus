let now = new Date();
let currentTime = document.querySelector(".time");
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let month = months[now.getMonth()];
currentTime.innerHTML = `${hours}:${minutes}, ${day} ${date} ${month}, ${year}`;

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#cityT");
  let conditionsElement = document.querySelector("#conditions");
  let speedElement = document.querySelector("#wSpeed");
  let humidityElement = document.querySelector("#humidity");
  let feelElement = document.querySelector("#fLike");

  temperatureElement.innerHTML =
    Math.round(response.data.temperature.current) + " °C";
  cityElement.innerHTML = response.data.city;
  conditionsElement.innerHTML = response.data.condition.description;
  speedElement.innerHTML = Math.round(response.data.wind.speed) + " Km/h";
  humidityElement.innerHTML = response.data.temperature.humidity + "%";
  feelElement.innerHTML =
    Math.round(response.data.temperature.feels_like) + "°C";
}
let cityTitle = "Madrid";
let apiKey = "9a33fd779e40o2b13tb533b7a79f4beb";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityTitle}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
