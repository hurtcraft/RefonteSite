import {WEATHER_API_KEY} from "./config.js";
import { actuDatas } from "./accueilData.js";
const navBar=document.getElementById("NavBar");
const divMeteo=document.getElementById("meteo");
const divTemperature=document.getElementById("temperature");
const meteoIcon=document.getElementById("meteoIcon")
const baniereActus=document.getElementById("banniere");


const fluxRss="https://news.google.com/rss/search?q=Beauvais&hl=fr&gl=FR&ceid=FR:fr";
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

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
    let title;
    let desc;
    let imgSrc;

    const actusContainer=document.getElementById("actusContainer");
    for(let i = 0; i <actuDatas.length;i++){
        title=actuDatas[i].title;
        desc=actuDatas[i].desc;
        imgSrc=actuDatas[i].img;
        console.log(actuDatas[i]);
        actusContainer.appendChild(createActu(title,imgSrc,"desc"));
    }
}
function createActu(title,imgSrc,desc){
    const div =document.createElement("div");
    const img= document.createElement("img");
    const header=document.createElement("h2");
    const data=document.createTextNode(desc);
    header.textContent=document.createTextNode(title).nodeValue;
    header.classList.add("headerActu");

    img.src=imgSrc;
    img.classList.add("imgActu");

    div.classList.add("actu");
    

    div.appendChild(header);
    div.appendChild(img);
    div.appendChild(data);

    return div;
}
//marche pas
async function fetchActu(){
    //marche pas
    var headers = {};
    const reponse=await fetch(fluxRss,{
        method : "GET",
        mode: 'no-cors',
        headers: headers
    });
    const data=reponse.text();
    console.log(data);
}
getMeteo();
actu();
//fetchActu();

