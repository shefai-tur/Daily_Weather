const apiKey = "6301961cee4942729f9105339241007";
const APIUrl = "http://api.weatherapi.com/v1/current.json?&q=";

//const apiUrl ="http://api.weatherapi.com/v1/current.json?key=6301961cee4942729f9105339241007&q="
//const searchBox = "Bangladesh";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  //const response = await fetch(apiUrl+city)
  const response = await fetch(APIUrl + city + `&key=${apiKey}`);
  if (response.status == 400) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.location.name;
    document.querySelector(".time").innerHTML = data.location.localtime;
    document.querySelector(".temp").innerHTML =Math.round(data.current.temp_c) + "°c";
    document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
    document.querySelector(".wind").innerHTML = data.current.wind_kph + "km/h";
    document.querySelector(".weather-text").innerHTML =data.current.condition.text;
    var imageUrl = data.current.condition.icon;
    weatherIcon.src = imageUrl;
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    console.log(data.location.localtime);
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
