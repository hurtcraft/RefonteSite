import data from "../infos/qualitesServices.json" assert {type: "json"}
import { jeuneTarif, retraiteTarif, emploiTarif, invalideTarif, publicTarif } from "../infos/tarifs.js";
const tarifsText = [jeuneTarif, retraiteTarif, emploiTarif, invalideTarif, publicTarif]

// var idInterva;
const qualitesServiceContainer = document.getElementById("qualiteServiceConainer");
const tarifs = document.querySelectorAll(".tarif");
const tarifContent = document.querySelector(".tarifContent")
const busInTrafic = document.getElementById("busInTrafic")
const windowWidth = document.documentElement.clientWidth;
const linkChart = document.getElementById("charte")
document.documentElement.style.setProperty('--width-screen', `${windowWidth - 0.4 * windowWidth}px`);
document.documentElement.style.setProperty('--negative-width-screen', `-${windowWidth - 0.4 * windowWidth}px`);
const cards = document.querySelectorAll(".card");

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

function addQualitesServicesOld() {
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
    data.qualites.forEach((qualite) => {
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


const arrowAnimation = [
    { transform: "translateX(-50%)" },
    { transform: "translateX(-25%)" }
]

const arrowAnimationBack = [
    { transform: "translateX(-25%)" },
    { transform: "translateX(-50%)" }
]

const arrowAnimationDuration = { duration: 2000, fill: "forwards" }
function iconClickHandle(divQaulite) {
    let icone = divQaulite.querySelector(".icone");
    let bus = divQaulite.querySelector(".bus");
    let divText = divQaulite.querySelector(".divText");
    let divArrow = divQaulite.parentNode.querySelector(".arrow")

    // divText.addEventListener("animationend", ()=>{
    //     if (!isVisible(divText)){
    //         divText.style.visibility = "visible";
    //     }
    //     else{
    //         divText.style.visibility = "hidden"
    //         console.log('invisible');
    //     }
    // })

    divText.addEventListener("animationend", () => {
        divText.style.animation = "";
        if (bus.hasAttribute("clicked")) {
            divText.style.visibility = "hidden"
        }
    })

    icone.addEventListener("animationend", () => {
        icone.style.animation = "";
        if (bus.hasAttribute("clicked")) {
            icone.style.transform = `translateX(0px)`;
        }
        else {
            icone.style.transform = `translateX(${windowWidth - 0.4 * windowWidth}px)`;
        }
    })

    bus.addEventListener("animationend", () => {
        bus.style.animation = "";
        bus.style.opacity = "0";
        divText.style.animation = "";
        // icone.style.animation = "";
        // divText.style.visibility = "hidden"
    })
    icone.addEventListener("click", () => {
        bus.toggleAttribute("clicked")
        if (bus.hasAttribute("clicked")) {
            // bus.style.visibility = "hidden"
            bus.style.animation = "rightToLeft 2s ease-in-out, busAnimationVisibility 2s ease-in-out";
            divText.style.animation = "normalToLeft 2s ease-in-out";
            icone.style.animation = "rightToLeft 2s ease-in-out";
            divArrow.animate(arrowAnimationBack, arrowAnimationDuration)
            // setTimeout(()=>{
            //     divText.style.visibility = "hidden"
            // }, 1990)
            // icone.style.animation = 
        }
        else {
            bus.style.visibility = "visible";
            // divText.style.visibility = "visible"
            bus.style.animation = "leftToRight 2s ease-in-out, busAnimationVisibility 2s ease-in-out"
            icone.style.animation = "leftToRight 2s ease-in-out";
            divArrow.animate(arrowAnimation, arrowAnimationDuration)
            // divArrow.style.animation = "slideLeftToRightArrow 2s ease-in-out"

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
    icone.addEventListener("click", () => {
        // this.style.animation = "slideFromBottom 1s ease-in-out"
        // console.log(document.getElementById(`${icone.id}Text`));
        const textAnimated = document.getElementById(`${icone.id}Text`);
        // textAnimated.style.display = "block";

        if (textAnimated.hasAttribute("invisible")) {
            icone.style.paddingTop = "0px";
            textAnimated.style.animation = "slideFromBottom 1s ease-in-out, apear 1s ease-in-out";
            textAnimated.toggleAttribute("invisible")
        }
        else {
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
    const listTarif = ["JEUNE -19 ANS", "RETRAITÉ", "DEMANDEUR EMPLOI", "INVALIDITÉ + DE 80 %", "TOUT PUBLIC"]
    const nav = document.getElementById("NavBar")
    const titre = document.getElementById("titreTarif")
    let barT = document.querySelector(".barT")
    busInTrafic.addEventListener("animationend", () => {
        busInTrafic.style.display = "none"
        busInTrafic.style.animation = "";
    })
    tarifs.forEach((element, index) => {
        let animation = { transform: `translateX(${element.getBoundingClientRect().left}px)` }

        let disapearAnim = [{ opacity: 0 }, { opacity: 1, offset: 0.2 }, { opacity: 1, offset: 0.8 }, { opacity: 0, offset: 1 }]

        element.addEventListener("mouseover", () => {
            element.querySelector("p").style.display = "block"
        })
        element.addEventListener("mouseout", () => {
            element.querySelector("p").style.display = "none"
        })
        element.addEventListener("click", (e) => {
            window.scrollTo(0, element.offsetTop - nav.getBoundingClientRect().height + 1 - 50)
            busInTrafic.style.display = "block"
            // ------------------------------------------Animation de 180deg ne fonctionne pas j'ai la flemme
            let indexTarif = Array.prototype.indexOf.call(barT.children, element)
            indexTarif -= 1
            let busIndex = parseInt(busInTrafic.getAttribute("index"));
            tarifContent.querySelectorAll("div")[busIndex].style.display = "none"

            // if (busInTrafic.hasAttribute("right") && indexTarif < busIndex){
            //     console.log("tourne");
            //     busInTrafic.animate(flip, {duration : 0, fill : "forwards"})
            // }
            // tarifContent.innerText = tarifsText[indexTarif-1]
            titre.innerText = listTarif[indexTarif]
            let tarifAfficher = tarifContent.querySelectorAll("div")[indexTarif]
            tarifAfficher.style.display = "block"
            
            busInTrafic.setAttribute("index", indexTarif)
            let animationDuration = { duration: 1000 * Math.abs(indexTarif - busIndex), fill: "forwards", easing: "ease-in-out"}

            busInTrafic.animate(animation, animationDuration);
            busInTrafic.animate(disapearAnim, animationDuration)
            // busInTrafic.style.left = element.getBoundingClientRect().left+"px"
        })
    })
    tarifs[0].click()
}

function addCardsAnimation() {
    // const disappearAnimation = "disappearAt50 0.5s forwards"
    // const appearAnimation = "appearAt50 0.5s forwards"
    const disappearAnimation = {
        opacity: [1, 1, 0],
        offset: [0, 0.5, 0.75],
    };
    const appearAnimation = {
        opacity: [0, 0, 1, 1],
        offset: [0, 0.5, 0.75, 1],
    }
        // {opacity: 1, offset:0}, {opacity: 1, offset:0.5}, {opacity}

    cards.forEach((element) => {
        let text = element.querySelector("p");
        let img = element.querySelector("img");
        let titre = element.querySelector("h1");
        text.addEventListener("animationend", () => {
            if (!element.hasAttribute("turn")) {
                text.style.display = "none"
            }
        })
        element.addEventListener("click", () => {
            if (element.hasAttribute("turn")) {
                element.style.animation = "turn180To360 1s forwards";
                text.style.animation = "disappearAt50 0.5s forwards";
                img.style.animation = "appearAt50 0.3s forwards";
                titre.style.animation = "appearAt50 0.3s forwards";

            }
            else {
                element.style.animation = "turn0To180 1s forwards"
                text.style.animation = "appearAt50 0.5s forwards"
                text.style.display = "block"
                img.style.animation = "disappearAt50 0.1s forwards"
                titre.style.animation = "disappearAt50 0.1s forwards"
            }
            element.toggleAttribute("turn");
        })
        
        img.addEventListener("animationend", ()=>{
            if (element.hasAttribute("turn")){
                img.style.visibility = "hidden";
                titre.style.visibility = "hidden"
            }
            else{
                img.style.visibility = "visible"
                titre.style.visibility = "visible"
            }
        })
    })
}

function charteClickHandler() {
    const containerQualite = document.querySelector(".containerQualite");
    const nav = document.getElementById("NavBar")
    linkChart.addEventListener("click", (e) => {
        window.scrollTo(0, containerQualite.offsetTop - nav.getBoundingClientRect().height + 1);
        e.preventDefault();
        e.stopPropagation()
    })
}

function clickOnReseau() {
    const reseau = document.querySelector(".reseau");
    const plan = reseau.querySelector("img");
    plan.addEventListener("click", ()=>{
        open("img/transports/plan-du-reseau-132.pdf")
    })
}

function clickOnAeroport() {
    const aero = document.querySelector(".aeroport");
    const plan = aero.querySelector("img");
    plan.addEventListener("click", ()=>{
        open("https://www.aeroportparisbeauvais.com/passagers", "_blank")
    })
}

function qualiteClique() {
    const containerQualite = document.querySelector(".containerQualite");
    const containerIcone = document.querySelector(".containerIcone");
    const iconeQualites = containerQualite.querySelectorAll(".iconeQualite");
    const textQualite = containerQualite.querySelectorAll(".qualiteText");
    const lesCroix = document.querySelectorAll(".croix")
    let i = 0;
    iconeQualites.forEach((icone)=>{
        icone.addEventListener("click", (e)=>{
            containerQualite.classList.toggle("clique")
            let iconeIndexClick = Array.prototype.indexOf.call(containerIcone.children, icone);
            textQualite[iconeIndexClick].style.display = "block"
        })
        i++
    })

    lesCroix.forEach((element)=>{
        element.addEventListener("click", (e)=>{
            containerQualite.classList.toggle("clique")
            setTimeout(()=>{
                element.parentElement.style.display = "none"
            }, 1100)
        })
    })
}


function init() {
    // addQualitesServices();
    tarifHandler();
    addCardsAnimation();
    charteClickHandler();
    clickOnReseau();
    clickOnAeroport();
    qualiteClique();
    window.scrollTo(0, 0);
}


init()