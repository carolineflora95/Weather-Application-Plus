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
  console.log(response.data.condition.icon_url);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#cityT");
  let conditionsElement = document.querySelector("#conditions");
  let speedElement = document.querySelector("#wSpeed");
  let humidityElement = document.querySelector("#humidity");
  let feelElement = document.querySelector("#fLike");
  let iconElement = document.querySelector("#icon");

  celsiusTemp = response.data.temperature.current;

  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  conditionsElement.innerHTML = response.data.condition.description;
  speedElement.innerHTML = Math.round(response.data.wind.speed) + " Km/h";
  humidityElement.innerHTML = response.data.temperature.humidity + "%";
  feelElement.innerHTML =
    Math.round(response.data.temperature.feels_like) + "°";
  iconElement.setAttribute("src", response.data.condition.icon_url);
}
function search(city) {
  let apiKey = "9a33fd779e40o2b13tb533b7a79f4beb";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let citySearch = document.querySelector("#searchCity");
  search(citySearch.value);
}
function displayFconversion(event) {
  event.preventDefault();
  let fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;

  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(fahrenheitTemp);
}

function displayCconversion(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemp);
}

let celsiusTemp = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", displayFconversion);

let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", displayCconversion);

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  let apiKey = "9a33fd779e40o2b13tb533b7a79f4beb";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
  axios.get(apiUrl).then(displayTemperature);
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let locationButton = document.querySelector("#geoButton");
locationButton.addEventListener("click", getCurrentPosition);

search("A Coruña");
