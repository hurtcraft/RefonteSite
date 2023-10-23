


/*********************************************Début Onglets**********************************************/
const onglets = $('.boutonD');
const sousPages = $('.PageD');
const nbOnglets = 8;
var OngletPrec = 0;

window.addEventListener("load", initPage);
onglets.click(openPage);

function initPage(){
    
    for(let i = 0; i < nbOnglets; ++i){
        sousPages[i].style.display = "none";
    }
}


function openPage(){
    let indexCourant = onglets.index(this);
    sousPages[OngletPrec].style.display = "none";
    sousPages[indexCourant].style.display = "block";
    OngletPrec = indexCourant;

}


/*********************************************Fin onglet**********************************************/



/*************************Début Sous onglet Déchets ménagers**************************/
/************Début sous onglet*************/
var QBeauvais = document.querySelector("#btn1");
var CRurales = document.querySelector("#btn2");

var ContentQBeauvais = document.querySelector("#QBeauvais")
var ContentCRurales = document.querySelector("#CRurales")

QBeauvais.addEventListener("click", openQBeauvais);
CRurales.addEventListener("click", openRurales);

function openQBeauvais(){
    ContentQBeauvais.style.display = "inline"
    ContentCRurales.style.display = "none"

    QBeauvais.style.color = "#CF1414";
    CRurales.style.color = "#000000";
}

function openRurales(){
    ContentQBeauvais.style.display = "none";
    ContentCRurales.style.display = "block";

    QBeauvais.style.color = "#000000";
    CRurales.style.color = "#CF1414";
}



/************Fin sous onglet*************/
/************Début caroussel*************/
const initSlider = () => {
    const slideButtons = document.querySelectorAll(".btnCar");
    const Slidecards = document.querySelector(".calColl");


    slideButtons.forEach(button => {
        button.addEventListener("click", () =>{
            const direction = button.id === "gauche" ? -1 : 1;
            const scrollAmount = Slidecards.clientWidth  * direction;
            Slidecards.scrollBy({ left: scrollAmount, behavior: "smooth" });

        })
    })
}
window.addEventListener("load", initSlider);
/************Fin caroussel*************/


/*************************Fin Sous onglet Déchets ménagers**************************/