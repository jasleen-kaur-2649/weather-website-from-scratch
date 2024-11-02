// alert("Hello");

function formatDate() {
  let cityTime = document.querySelector("#current-city-time");
  let today = new Date();
  let day = today.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = today.getDate();
  if (date < 10) {
    date = `0${date}`;
  }
  let month = today.getMonth();
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
  cityTime.innerHTML = `${days[day]}, ${date} ${months[month]}`;
}
function searchCity(response) {
  function displayTemperature(city) {
    let actualTemperature = document.querySelector(".temperature-value");
    actualTemperature.innerHTML = `${Math.round(
      city.data.temperature.current
    )}`;

    let feelsLikeTemperature = document.querySelector(
      ".temperature-feels-like"
    );
    // console.log(city.data.temperature.feels_like);
    if (city.data.temperature.feels_like < 10)
      feelsLikeTemperature.innerHTML = `0${Math.round(
        city.data.temperature.feels_like
      )}`;
    else {
      feelsLikeTemperature.innerHTML = `${Math.round(
        city.data.temperature.feels_like
      )}`;
    }

    // not working yet
    //let minTemperature = document.querySelector(
    //   ".min-temperature .condition .values"
    // );
    // console.log(city.data.daily[0].temperature.minimum);
    // minTemperature.innerHTML = `${city.data.daily[0].temperature.minimum}ºC`;

    let windSpeed = document.querySelector(".wind-speed .condition .values");
    windSpeed.innerHTML = `${city.data.wind.speed}km/h`;

    let humidity = document.querySelector(".humidity .condition .values");
    humidity.innerHTML = `${city.data.temperature.humidity}%`;
  }
  response.preventDefault();
  let apiKey = "2d8o4b96bdta6ee065c85fc43853285d";
  let cityElement = document.querySelector(".input-search-text");
  cityElement = cityElement.value;
  let cityName = document.querySelector("#city-name");
  cityName.innerHTML = cityElement;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityElement}&key=${apiKey}`;
  axios.get(apiUrl).then(displayTemperature);

  //
  // let weatherIcon = document.querySelector(".current-city-weather-icon");
  // ;
  // let maxTemperature = document.querySelector(
  //   ".max-temperature .condition .values"
  // );
  // let windSpeed = document.querySelector("wind-speed .condition .values");
  //
}
let searchButton = document.querySelector(".input-search-submit");
searchButton.addEventListener("click", searchCity);
formatDate();
