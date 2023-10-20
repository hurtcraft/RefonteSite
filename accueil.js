import {WEATHER_API_KEY} from "./config.js";
import { actuDatas,mapDatas,chiffresEconomiques,agendaData } from "./accueilData.js";
//const navBar=document.getElementById("NavBar");
//const divMeteo=document.getElementById("meteo");
const divTemperature=document.getElementById("temperature");
const meteoIcon=document.getElementById("meteoIcon")
const currentDescContainer=document.getElementById("currentDescContainer");
const currentImgContainer=document.getElementById("currentImgContainer");
const escapeActuBtn=document.getElementById("escapeActuBtn");
//const baniereActus=document.getElementById("banniere");


//const fluxRss="https://news.google.com/rss/search?q=Beauvais&hl=fr&gl=FR&ceid=FR:fr";
//const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

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

function actus(){
    let title;
    let desc;
    let imgSrc;

    const actusContainer=document.getElementById("actusContainer");
    for(let i = 0; i <actuDatas.length;i++){
        title=actuDatas[i].title;
        desc=actuDatas[i].desc;
        imgSrc=actuDatas[i].img;
        actusContainer.appendChild(createActu(title,imgSrc,desc));
    }
}
function createActu(title,imgSrc,desc){
    const div =document.createElement("div");
    const img= document.createElement("img");
    const header=document.createElement("h2");
    const data=document.createTextNode(desc);
    const p = document.createElement("p");
    p.classList.add("desc");
    p.appendChild(data);
    
    header.textContent=document.createTextNode(title).nodeValue;
    header.classList.add("headerActu");

    img.src=imgSrc;
    img.classList.add("imgActu");

    div.classList.add("actu");
    

    div.appendChild(header);
    div.appendChild(img);
    div.appendChild(p);

    return div;
}


getMeteo();



actus();
const allActus=document.querySelectorAll(".actu");
let titleActu;
allActus.forEach(actu => {
    actu.addEventListener("click",()=>{
        allActus.forEach(elt=>{
            
            elt.classList.add("displayNoneElt");
                
            
            currentImgContainer.src=actu.querySelector("img").src;
            currentImgContainer.style.display="flex";



            currentDescContainer.innerText=actu.querySelector("p").innerText;
            currentDescContainer.style.display="flex";


            escapeActuBtn.style.display="flex";


        })
    })
    actu.addEventListener("mouseover",()=>{
        titleActu=actu.querySelector(".headerActu");
        
        titleActu.style.display="block";
        titleActu.style.animation="apparition_anime 0.8s";
        
    })

    actu.addEventListener("mouseleave",()=>{
        titleActu.style.animation="";
        titleActu.style.display="none";
    })
});

escapeActuBtn.addEventListener("click",()=>{
    allActus.forEach(elt=>{
            
        elt.classList.remove("displayNoneElt");


        currentImgContainer.style.display="none";
        currentDescContainer.style.display="none";
        escapeActuBtn.style.display="none";
        


    
    })    
})


//section carte intéractive

const mapDataContainer=document.getElementById("mapContent");
const regions=document.querySelectorAll("path");
regions.forEach(r=>{
    
    r.addEventListener("click",()=>{
        mapDataContainer.style.animation="slide_left 0.5s";
        
        mapDataContainer.textContent=mapDatas[r.id];
        
        mapDataContainer.addEventListener("animationend",()=>{
            mapDataContainer.style.animation="";
            mapDataContainer.scrollIntoView({ behavior: "smooth" });
        })
    })
})
//section chiffre eco

const chiffreEcoContainer=document.getElementById("chiffreEco");
const chiffreContainers=chiffreEcoContainer.querySelectorAll("[container]");
const Observer=new IntersectionObserver((entries)=>{
    for(const entry of entries){
        let title;
        let chiffre;
        if(entry.isIntersecting){
            chiffreContainers.forEach(c=>{
                let x=chiffresEconomiques[c.id];

                title=c.querySelector(".title");
                chiffre=c.querySelector(".chiffre");
                c.style.animation="apparition_anime 1s";
                
                defilementChiffre(chiffre,x,100);
                c.addEventListener("animationend",()=>{
                    c.style.animation="";
                })
                
            })
            
        }
    }
})
chiffreContainers.forEach(c=>{
    Observer.observe(c);
})
function defilementChiffre(container,x,delay){
    let i = 0
    function defilement(){
        if(i<delay){
            i++;
            container.textContent=randomInt(x);
            setTimeout(defilement,10);
        }
        else{
            if(x===80){
                container.textContent=x+"M";    
            }
            else{
                container.textContent=x;

            }
        }
    }
    defilement();
}

function randomInt(max){
    return Math.floor(Math.random()*max);
}

//section agenda

const planning=document.getElementById("planning");
const planningContent=document.getElementById("planningContent");
const events=planning.querySelectorAll(".event");

for(let i = 0;i<events.length;i++){
    let e =events[i];
    let rond=e.querySelector(".rond");
    let span=e.querySelector("span");
    span.textContent=agendaData[i].titre;
    rond.addEventListener("click",()=>{
        planningContent.style.animation="slide_left 0.2s";
        planningContent.textContent=agendaData[i].desc;

        planningContent.addEventListener("animationend",()=>{
            planningContent.scrollIntoView({ behavior: "smooth" }); 
            planningContent.style.animation="";
        })
    })

}

//section acces rapide + RS

const accesRapide=document.getElementById("accesRapide");
const RSContainer=document.getElementById("RS");

function createAcces(){
    
}




