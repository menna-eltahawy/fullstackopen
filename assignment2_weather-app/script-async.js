// const form = document.querySelector("#weatherForm");
// const result = document.querySelector("#weatherResult");
// const toggleBtn = document.querySelector("#toggleTemp");

// let currentWeather = null;
// let Celsius = false;

// async function getWeather(location){

// const API_KEY = "RCA3SVDXTKQZNZRZSHLQ3462Y";

// try{

// const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`);
// const data = await response.json();
// currentWeather = processWeatherData(data);
// displayWeather(currentWeather);
// changeBackground(currentWeather.conditions);
// }catch(error){
// console.log(error);
// result.innerHTML="Error loading weather";
// }
// }

// function processWeatherData(data){
// return {
// city: data.resolvedAddress,
// temp: data.currentConditions.temp,
// humidity: data.currentConditions.humidity,
// conditions: data.currentConditions.conditions
// };
// }

// function convertToCelsius(temp){
// return ((temp - 32) * 5/9).toFixed(1);
// }

// function displayWeather(weather){
// let temperature = Celsius ? convertToCelsius(weather.temp) : weather.temp;
// let unit = Celsius ? "°C" : "°F";
// result.innerHTML=`
// <div class="card">
// <h2>${weather.city}</h2>
// <p>Temperature: ${temperature}${unit}</p>
// <p>Humidity: ${weather.humidity}%</p>
// <p>Conditions: ${weather.conditions}</p>
// </div>
// `;
// }

// function changeBackground(condition){
// if(condition.includes("Rain")){
// document.body.style.background="#187eb9";
// }
// else if(condition.includes("Clear")){
// document.body.style.background="#21cc46";
// }
// else{
// document.body.style.background="#bdc9c8";
// }
// }

// form.addEventListener("submit",(e)=>{
// e.preventDefault();
// const location=document.querySelector("#location").value;
// result.innerHTML="Loading...";
// getWeather(location);
// });

// toggleBtn.addEventListener("click",()=>{
// if(!currentWeather) return;
// Celsius = !Celsius;
// toggleBtn.textContent = Celsius ? "Show °F" : "Show °C";
// displayWeather(currentWeather);
// });
