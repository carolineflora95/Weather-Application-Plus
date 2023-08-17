let apiKey = "9a33fd779e40o2b13tb533b7a79f4beb";
let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${latitude}&lat=${longitude}&key=${apiKey}&units=metric`;

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
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
}

axios.get(apiUrl).then(displayTemperature);
