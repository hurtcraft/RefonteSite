var image=["./img/activites/SiteTouristique1.jpg","./img/activites/SiteTouristique2.jpg","./img/activites/SiteTouristique3.jpg"]
var texte=["Carhédrale Saint Pierre de Beauvais","La Maladrerie Saint Lazare","Château de Troissereux"]
var imageLoisir=["./img/activites/loisir1.jpg","./img/activites/loisir2.jpg","./img/activites/loisir3.jpg","./img/activites/loisir4.png"]
var lienSite=['https://cathedrale-beauvais.fr/','https://maladrerie.fr/','https://chateau-troissereux.com/wp/'];
var lienLoisir=['https://www.visitbeauvais.fr/explorer/tous-a-l-eau/canoe/','https://www.visitbeauvais.fr/explorer/tous-a-l-eau/complexe-aquatique/','https://www.visitbeauvais.fr/explorer/loisirs/cariwood/','https://www.visitbeauvais.fr/explorer/loisirs/parc-saint-paul/']
var loisir=document.querySelector(".LoisirContainer");
var texteLoisir = ["Canoë-Kayak","Aquaspace","Cariwood","Parc Saint-Paul"]
function SiteToutisitique(){
    
    for(let i = 0; i <3;i++){
        SiteToursContainer.append(createSite(image[i],texte[i]));
    }
}
function createLoisir(image,title){
    var div =document.createElement("div");
    const img= document.createElement("img");
    const header=document.createElement("h2");
    header.classList.add("headerLoisir");
    header.textContent=document.createTextNode(title).nodeValue;
    img.src=image;
    div.appendChild(img);
    div.appendChild(header);
    div.classList.add("Loisir");
    img.classList.add("imgLoisir");
    return div;
}
console.log(loisir)

function Loisir(){
    for(let i = 0; i <4;i++){
        loisir.append(createLoisir(imageLoisir[i],texteLoisir[i]));
    }
}
function createSite(image,title){
    var div =document.createElement("div");
    const img= document.createElement("img");
    const header=document.createElement("h2");
    
    header.classList.add("headerSite");
    img.src=image;
    header.textContent=document.createTextNode(title).nodeValue;
    div.appendChild(img);
    div.classList.add("SiteTouristique");
    img.classList.add("imgSite");
    div.appendChild(header);
    return div;
}
Loisir()
var AllLoisir=loisir.querySelectorAll(".Loisir")
var SiteToursContainer=document.querySelector(".SiteTouristiqueContainer");
SiteToutisitique();
const Site =SiteToursContainer.querySelectorAll(".SiteTouristique")
console.log(Site)
const div1=document.querySelector(".SiteTouristiqueContainer .SiteTouristique");
console.log(div1);
for (let index = 0; index < 3; index++) {
    console.log();
}
function hoverSite(){
    for (let index = 0; index < 3; index++) {
        Site[index].addEventListener("mouseover",function(){
            Site[index].querySelector(".headerSite").style.visibility="visible"
            Site[index].querySelector(".headerSite").style.animation="apparition_anime 1s"
        })
    }
}
function OutSite(){
    for (let index = 0; index < 3; index++) {
        Site[index].addEventListener("mouseout",function(){
            Site[index].querySelector(".headerSite").style.visibility="hidden"
            Site[index].querySelector(".headerSite").style.animation=""
            
        })
    }
}
function hoverHeader(){
    for (let index = 0; index < 4; index++) {
        AllLoisir[index].querySelector(".headerLoisir").addEventListener("mouseover",function(){
            AllLoisir[index].querySelector(".imgLoisir").style.filter="brightness(0.6)"            
        })
    }
}
function outHeader(){
    for (let index = 0; index < 4; index++) {
        AllLoisir[index].querySelector(".headerLoisir").addEventListener("mouseout",function(){
            AllLoisir[index].querySelector(".imgLoisir").style.filter=""            
        })
    }
}
function hoverLoisir(){
    for (let index = 0; index < 4; index++) {
        AllLoisir[index].addEventListener("mouseover",function(){
            AllLoisir[index].querySelector(".headerLoisir").style.visibility="visible"
            AllLoisir[index].querySelector(".headerLoisir").style.animation="apparition_anime 1s"

        })
    }
}
function OutLoisir(){
    for (let index = 0; index < 4; index++) {
        AllLoisir[index].addEventListener("mouseout",function(){
            AllLoisir[index].querySelector(".headerLoisir").style.visibility="hidden"
            AllLoisir[index].querySelector(".headerLoisir").style.animation=""
            
        })
    }
}
hoverLoisir()
hoverSite();
OutSite();
OutLoisir()
hoverHeader()
outHeader()
for(let i = 0; i <3;i++){
    Site[i].addEventListener("click",function(){
        window.location.href=lienSite[i]
    })  
}
for(let i = 0; i <4;i++){
    AllLoisir[i].addEventListener("click",function(){
        window.location.href=lienLoisir[i]
    })  
}
const Observe=new IntersectionObserver((entries)=>{
    for(const entry of entries){
        console.log(entry)
        if(entry.isIntersecting &&!x.matches){
            Site.forEach(s=>{
                s.style.animation="slide_right 1s";
                s.addEventListener("animationend",()=>{
                        s.style.animation="";
                    })
                })
            }
        }
    }
)
Site.forEach(s=>{
    Observe.observe(s);
})
var x=window.matchMedia("(max-width:600px)")
console.log(x.matches)

const Obs=new IntersectionObserver((entries)=>{
    for(const entry of entries){
        console.log(entry)
        if(entry.isIntersecting &&!x.matches){
            AllLoisir.forEach(l=>{
            l.style.animation="slide_right 1s";
                l.addEventListener("animationend",()=>{
                        l.style.animation="";
                    })
                })
            }
        }
    }
) 



    

AllLoisir.forEach(l=>{
    Obs.observe(l);
})

console.log(SiteToursContainer);

