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

function showTemp(response) {
  let currentTemp = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `${currentTemp}°C`;
  let cityHeading = document.querySelector("#cityT");
  cityHeading.innerHTML = response.data.name;
}
function searchTemp(event) {
  event.preventDefault();
  let city = document.querySelector("#searchCity").value;
  let apiKey = "9a33fd779e40o2b13tb533b7a79f4beb";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchTemp);

function showLocTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  let locationTemp = document.querySelector("#temperature");
  locationTemp.innerHTML = `${temperature}°C`;

  let cityHeading = document.querySelector("#cityT");
  let cityName = document.querySelector("#searchCity").value;
  cityHeading.innerHTML = `${cityName}`;
  cityHeading.innerHTML = response.data.name;
}
function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  let apiKey = "9a33fd779e40o2b13tb533b7a79f4beb";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
  axios.get(apiUrl).then(showLocTemp);
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let locationButton = document.querySelector("geoButton");
locationButton.addEventListener("click", getCurrentPosition);
