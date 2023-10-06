import {WEATHER_API_KEY} from "./config.js";

const navBar=document.getElementById("NavBar");
const divMeteo=document.getElementById("meteo");
const divTemperature=document.getElementById("temperature");
const meteoIcon=document.getElementById("meteoIcon")
const baniereActus=document.getElementById("banniere");
// const WEATHER_API_KEY="7d4fed23c3b77156f7cc9ac02a44fc32";
const WEATHER_API_URL="https://api.openweathermap.org/data/2.5/weather?&units=metric&lang=french"
const map_weather={"Snow":"img/meteo/neige.png",
                "Clear":"img/meteo/soleil.png",
                "Clouds":"img/meteo/nuageux.png",
                "Rain":"img/meteo/pluie.png",
                "Drizzle":"img/meteo/pluie.png",
                "Mist":"img/meteo/pluie.png"};

async function getMeteo(){
    const response = await fetch(WEATHER_API_URL + "&appid=" +WEATHER_API_KEY + "&q=" + "Beauvais");
    const data = await response.json();
    divTemperature.innerText=Math.round(data.main.temp) + "°C";
    meteoIcon.src=map_weather[data.weather[0].main];

}

function actu(){
    const NbActus=5;
    const actusContainer=document.getElementById("actusContainer");
    for(let i = 0; i <NbActus;i++){
        actusContainer.appendChild(createActu());
    }
}
function createActu(){
    let div =document.createElement("div");
    div.classList.add("actu");
    div.innerText="   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, dolor";
    return div;
}

getMeteo();
actu();