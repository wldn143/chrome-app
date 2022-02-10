const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "";/*각자 api key 넣기~ */
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then((response)=> response.json())
  .then((data)=>{
      city.innerText=data.name;
      weather.innerText = `${data.weather[0].main}/${data.main.temp}`;
  });
}
function onGeoError() {
  alert("Can't find your location.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
