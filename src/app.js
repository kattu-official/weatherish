// ⏰Feature #1
//In your project, display the current date and time using JavaScript: Tuesday 16:00

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let currentDay = days[now.getDay()];
let setCurrentDay = document.querySelector("#current-day");
setCurrentDay.innerHTML = `${currentDay}`;

let currentDate = now.getDate();
let setCurrentDate = document.querySelector("#current-date");
setCurrentDate.innerHTML = `${currentDate}`;

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
  "December"
];
let currentMonth = months[now.getMonth()];
let setCurrentMonth = document.querySelector("#current-month");
setCurrentMonth.innerHTML = `${currentMonth}`;

let currentYear = now.getFullYear();
let setCurrentYear = document.querySelector("#current-year");
setCurrentYear.innerHTML = `${currentYear}`;

let currentHour = now.getHours();
if (currentHour < 10) {
  currentHour = `0${currentHour}`;
}
let setCurrentHour = document.querySelector("#current-hour");
setCurrentHour.innerHTML = `${currentHour}`;

let currentMinutes = now.getMinutes();
if (currentMinutes < 10) {
  currentMinutes = `0${currentMinutes}`;
}
let setCurrentMinutes = document.querySelector("#current-minutes");
setCurrentMinutes.innerHTML = `${currentMinutes}`;

//REWRITE as a function

// 🕵️‍♀️Feature #2
// Add a search engine, when searching for a city (i.e. Paris), display the city name on the page after the user submits the form.



// 🙀Bonus Feature
// Display a fake temperature (i.e 17) in Celsius and add a link to convert it to Fahrenheit. When clicking on it, it should convert the temperature to Fahrenheit. When clicking on Celsius, it should convert it back to Celsius.
function charngeTemperature(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature-c");
  let temC = temperature.innerHTML;
  temC = Number (temC);
  let temF = Math.round((temC * 1.8) + 32);
  temperature.innerHTML = `${temF}`;
  let measure = document.querySelector("#measure");
  measure.innerHTML = `F`;
}

let convertTemperature = document.querySelector("#convert-tempersture");
convertTemperature.addEventListener("click", charngeTemperature);



function getLocation (position) {

let apiKey = "96ad27349a64ea1dcdfbe6f4d458c085";
let lat = position.coords.latitude;
let lon = position.coords.longitude;
let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

function getTemperature (response){
  let cityMain = document.querySelector("#city-main");
  cityMain.innerHTML = `${response.data.name}`;
  let temperature = document.querySelector("#temperature-c");
  let currentTemperature = Math.round(response.data.main.temp);
  temperature.innerHTML = `${currentTemperature}`;
}

axios.get(url).then(getTemperature);
}

function showLocation(){
navigator.geolocation.getCurrentPosition(getLocation);
}

let locationButton = document.querySelector("#location-button");
locationButton.addEventListener("click", showLocation);


function enterCity(event) {
  event.preventDefault();
  let input = document.querySelector("#city-form");
  let mainCity = document.querySelector("#city-main");
  mainCity.innerHTML = `${input.value}`;
  let apiKey = "96ad27349a64ea1dcdfbe6f4d458c085";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${apiKey}`;
  
  function getTemperature (response){
    let temperature = document.querySelector("#temperature-c");
    let currentTemperature = Math.round(response.data.main.temp);
    temperature.innerHTML = `${currentTemperature}`;
  }
  
  axios.get(url).then(getTemperature);


}


let form = document.querySelector("form");
form.addEventListener("submit", enterCity);








// rewrite the system like HTML and all that thing to make C and F clickable


// Previous Challenges
//let weather = {
//paris: {
//temp: 19.7,
//humidity: 80
//},
//tokyo: {
//temp: 17.3,
//humidity: 50
//},
//lisbon: {
//temp: 30.2,
//humidity: 20
//},
//"san francisco": {
//temp: 20.9,
//humidity: 100
//},
//oslo: {
//temp: -5,
//humidity: 20
//}
//};

//let askCity = prompt("Enter a city");
//askCity = askCity.trim();
//askCity = askCity.toLowerCase();
//let askCityUp = askCity.charAt(0).toUpperCase() + askCity.slice(1);
//if (weather[askCity] !== undefined) {
//  let temperature = weather[askCity].temp;
//let humidity = weather[askCity].humidity;
//let tempC = Math.round(weather[askCity].temp);
//let tempF = Math.round(weather[askCity].temp * 1.8 + 32);
//alert(
//`It is currently ${tempC}°C (${tempF}°F) in ${askCityUp} with a humidity of ${humidity}%`
//);
//} else {
//alert(
//`Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${askCity}`
//);
//}
