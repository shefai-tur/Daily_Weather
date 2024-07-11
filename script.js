const apiKey = "6301961cee4942729f9105339241007";
const APIUrl = "http://api.weatherapi.com/v1/current.json?&q=";

//const apiUrl ="http://api.weatherapi.com/v1/current.json?key=6301961cee4942729f9105339241007&q="
//const searchBox = "Bangladesh";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
  // const response = await fetch(apiUrl+city)
  const response = await fetch(APIUrl + city + `&key=${apiKey}`);
  var data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.location.name;
  document.querySelector(".temp").innerHTML =
    Math.round(data.current.temp_c) + "°c";
  document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
  document.querySelector(".wind").innerHTML = data.current.wind_kph + "km/h";
  document.querySelector(".weather-text").innerHTML =data.current.condition.text;

 
  //console.log("test->", data.current.condition.icon);
//   let icon = data.current.condition.icon;
 

// //   img.src = icon;
// img.src = 'icon';
// document.body.appendChild(img);

// var imageUrl = data.current.condition.icon;
// var img = new Image();
// img.src = imageUrl;
// img.alt = 'Weather condition';


 
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
// checkWeather(searchBox);
