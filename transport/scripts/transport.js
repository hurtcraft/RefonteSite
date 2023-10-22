import data from "../infos/qualitesServices.json" assert {type : "json"}
import { jeuneTarif, retraiteTarif, emploiTarif, invalideTarif, publicTarif } from "../infos/tarifs.js";
const tarifsText = [jeuneTarif, retraiteTarif, emploiTarif, invalideTarif, publicTarif]

// var idInterva;
const qualitesServiceContainer = document.getElementById("qualiteServiceConainer");
const tarifs = document.querySelectorAll(".tarif");
const tarifContent = document.querySelector(".tarifContent")
const busInTrafic = document.getElementById("busInTrafic")
const windowWidth = document.documentElement.clientWidth;
document.documentElement.style.setProperty('--width-screen', `${windowWidth-0.2*windowWidth}px`);0
document.documentElement.style.setProperty('--negative-width-screen', `-${windowWidth-0.2*windowWidth}px`);0

addBusAnimation();

function addBusAnimation() {
    // bus.style.marginLeft = "200px";
    // bus.style.animation = "leftToRight 2s ease-in-out;";
    // bus.style.translate = "transfromX(500px);";
    // console.log(bus.style.marginLeft);
}

function addPaddingToStart() {
    qualitesServiceContainer.style.paddingTop = `${document.getElementById("NavBar").clientHeight}px`;
}

function addQualitesServicesOld(){
    data.qualites.forEach((element) => {
        let qualite = document.createElement("div");
        let iconeQualite = document.createElement("img");
        let textQualite = document.createElement("div");
        let titre = document.createElement("h1");
        let desc = document.createElement("p");

        iconeQualite.src = element.image;
        
        addHoverEffectQualite(iconeQualite)

        textQualite.classList.add("textQualite");
        textQualite.classList.add("slideTop");
        textQualite.id = `${element.id}Text`;
        iconeQualite.id = element.id;
        qualite.classList.add("qualite");
        iconeQualite.classList.add("iconeQualite")

        qualite.appendChild(iconeQualite);
        qualite.appendChild(textQualite);
        textQualite.appendChild(titre);
        textQualite.appendChild(desc);
        qualitesServiceContainer.appendChild(qualite);

        // console.log(qualite.childNodes());

        

        titre.innerText = element.titre;
        desc.innerText = element.description;
    }) 
}

function addQualitesServices() {
    data.qualites.forEach((qualite)=>{
        let qualiteDiv = createQualite(qualite);
        qualitesServiceContainer.appendChild(qualiteDiv)
    })
}
/**
 * @returns banniere content pour pouvoir directement append
 */
function createBanniere() {
    let divBanniere = document.createElement("div");
    divBanniere.classList.add("banniere");
    let divArrow = document.createElement("div");
    divArrow.classList.add("arrow");
    let divSquare = document.createElement("div");
    divSquare.classList.add("square");
    let divTriangle = document.createElement("div");
    divTriangle.classList.add("triangle");
    let divContainer = document.createElement("div");
    divContainer.classList.add("banniereContent");
    divBanniere.appendChild(divArrow);
    divArrow.appendChild(divSquare);
    divArrow.appendChild(divTriangle);
    divBanniere.appendChild(divContainer);
    return divBanniere;
}

function createQualite(qualite) {
    // let div = document.createElement("div");
    let div = createBanniere();
    let divContainer = div.querySelector(".banniereContent");
    let icone = document.createElement("img");
    let divText = document.createElement("div");
    let titre = document.createElement("h1");
    let desc = document.createElement("p");
    let bus = document.createElement("img");
    // div.appendChild(createArrow());
    // div.classList.add("qualite")
    bus.classList.add("filter-orange");
    bus.classList.add("bus");
    // ?? je suppose qu'on est dans le fichier Transport.html
    bus.src = "./img/transports/bus.svg";
    bus.toggleAttribute("clicked")

    // bus.toggleAttribute("invisible");
    divText.style.visibility = "hidden";
    divText.classList.add("textQualite")
    icone.classList.add("iconeQualite")
    icone.classList.add("icone")
    divText.classList.add("divText")
    icone.src = qualite.image;
    // icone.style.top = `${0.5*div.height-icone.height}px`;
    // console.log(icone.style.top);
    titre.innerText = qualite.titre;
    desc.innerText = qualite.description;

    divText.appendChild(titre);
    divText.appendChild(desc);
    divContainer.appendChild(icone);
    divContainer.appendChild(bus)
    divContainer.appendChild(divText);

    iconClickHandle(divContainer);

    return div;
}

function createArrow() {
    let arrow = document.createElement("div");
    arrow.classList.add("fleche");
    let square = document.createElement("div");
    square.classList.add("carre");
    arrow.appendChild(square);
    let triangle = document.createElement("div");
    triangle.classList.add("tri");
    arrow.appendChild(triangle);
    return arrow;
}

function iconClickHandle(divQaulite) {
    let icone = divQaulite.querySelector(".icone");
    let bus = divQaulite.querySelector(".bus");
    let divText = divQaulite.querySelector(".divText");

    // divText.addEventListener("animationend", ()=>{
    //     if (!isVisible(divText)){
    //         divText.style.visibility = "visible";
    //     }
    //     else{
    //         divText.style.visibility = "hidden"
    //         console.log('invisible');
    //     }
    // })

    divText.addEventListener("animationend", ()=>{
        divText.style.animation = "";
        if (bus.hasAttribute("clicked")){
            divText.style.visibility = "hidden"
        }
    })

    icone.addEventListener("animationend", ()=>{
        icone.style.animation = "";
        if (bus.hasAttribute("clicked")){
            icone.style.transform = `translateX(0px)`;    
        }
        else{
            icone.style.transform = `translateX(${windowWidth-0.2*windowWidth}px)`;
        }
    })

    bus.addEventListener("animationend", ()=>{
        bus.style.animation = "";
        bus.style.opacity = "0";
        divText.style.animation = "";
        // icone.style.animation = "";
        // divText.style.visibility = "hidden"
    })
    icone.addEventListener("click", ()=>{
        bus.toggleAttribute("clicked")
        if (bus.hasAttribute("clicked")){
            // bus.style.visibility = "hidden"
            bus.style.animation = "rightToLeft 2s ease-in-out, busAnimationVisibility 2s ease-in-out";
            divText.style.animation = "normalToLeft 2s ease-in-out";
            icone.style.animation = "rightToLeft 2s ease-in-out";
            // setTimeout(()=>{
            //     divText.style.visibility = "hidden"
            // }, 1990)
            // icone.style.animation = 
        }
        else{
            bus.style.visibility = "visible";
            // divText.style.visibility = "visible"
            bus.style.animation = "leftToRight 2s ease-in-out, busAnimationVisibility 2s ease-in-out"
            icone.style.animation = "leftToRight 2s ease-in-out";
            
            divText.style.visibility = "visible"
            divText.style.animation = "leftToNormal 2s ease-in-out";
        }
    })
}


/**
 * 
 * @param {HTMLImageElement} icone 
 */
function addHoverEffectQualite(icone) {
    icone.addEventListener("click", () =>{
        // this.style.animation = "slideFromBottom 1s ease-in-out"
        // console.log(document.getElementById(`${icone.id}Text`));
        const textAnimated = document.getElementById(`${icone.id}Text`);
        // textAnimated.style.display = "block";
        
        if (textAnimated.hasAttribute("invisible")) {
            icone.style.paddingTop = "0px";
            textAnimated.style.animation = "slideFromBottom 1s ease-in-out, apear 1s ease-in-out";
            textAnimated.toggleAttribute("invisible")
        }
        else{
            icone.style.paddingTop = "100%";
            textAnimated.style.animation = "slideFromTop 1s ease-in-out, disapear 1s ease-in-out";
            setTimeout(() => {
                textAnimated.toggleAttribute("invisible")
            }, 1000);
        }
        console.log('ok');
    });
    // icone.addEventListener("mouseout", () =>{
    //     // console.log(document.getElementById(`${icone.id}Text`));
    //     document.getElementById(`${icone.id}Text`).style.display = "none"
    //     console.log('ok');
    // });
}
// addPaddingToStart()

function tarifHandler() {
    let barT = document.querySelector(".barT")
    busInTrafic.addEventListener("animationend", ()=>{
        busInTrafic.style.animation = "";
    })
    tarifs.forEach((element, index) =>{
        
        let animation = {transform : `translateX(${element.getBoundingClientRect().left}px)`}
            
        let disapearAnim = [{opacity : 0}, {opacity : 1, offset : 0.2}, {opacity : 1, offset : 0.8}, {opacity : 0, offset : 1}]
        
        element.addEventListener("mouseover", ()=>{
            element.querySelector("p").style.display = "block"
        })
        element.addEventListener("mouseout", ()=>{
            element.querySelector("p").style.display = "none"
        })
        element.addEventListener("click", (e)=>{
            // ------------------------------------------Animation de 180deg ne fonctionne pas j'ai la flemme
            let indexTarif = Array.prototype.indexOf.call(barT.children, element)
            let busIndex = parseInt(busInTrafic.getAttribute("index"));
            // if (busInTrafic.hasAttribute("right") && indexTarif < busIndex){
            //     console.log("tourne");
            //     busInTrafic.animate(flip, {duration : 0, fill : "forwards"})
            // }
            tarifContent.innerText = tarifsText[indexTarif-1]
            busInTrafic.setAttribute("index", indexTarif)
            let animationDuration = {duration : 1000*Math.abs(indexTarif-busIndex), fill : "forwards"}

            busInTrafic.animate(animation, animationDuration);
            busInTrafic.animate(disapearAnim, animationDuration)
            // busInTrafic.style.left = element.getBoundingClientRect().left+"px"
        })
    })
}

function init() {
    addQualitesServices();
    tarifHandler();
}


init()