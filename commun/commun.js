const NavBar=document.getElementById("NavBar");
const NavBarContainer=document.getElementById("NavBarContainer");
const Bannieres=document.querySelectorAll('.banniere')
const Hamburger=document.getElementById("hamburger");
///pas tres propre je corrigerai plus tard jv dodo 
//mai ca fonctionne, j'encapsulerai le tout dans une fonction 
const Observer=new IntersectionObserver((entries)=>{
    for(const entry of entries){
        let arrow;
        let contents=entry.target.querySelector(".banniereContent");
        console.log(contents);
        if(entry.isIntersecting){
            arrow=entry.target.querySelector(".arrow");
            arrow.style.animation="slide_right 1.5s ease-in-out";
            arrow.addEventListener("animationend",()=>{
                arrow.style.animation="";
                contents.style.animation="animation: apparition_anime 10s 10s ease-out ";
            });
            contents.style.animation="";
        }

    }
})
Bannieres.forEach((b)=> {
    Observer.observe(b)
});
//jusquici


function CreateNavBar(){
    const lstBtnSections= ["","Accueil","Transport","Activites","Ecologie","Plan Climat","Economie","Habitat","Politique de la Ville"];
    //NavBar.appendChild(getLogo());
    let link;
    for(let i=0;i<lstBtnSections.length;i++){
        link=document.createElement("a");
        link.innerText=lstBtnSections[i];
        link.classList.add("btnMenu");
        if(i<=3){
            link.href=lstBtnSections[i].concat(".html");
        }
        else{
            link.href="pageConstruction.html";
        }
        
        //link.style.gridColumn=(i+2).toString();
        NavBar.appendChild(link);
    }
}

function getLogo(){
    let banniere=new Image();
    banniere.src="../img/banniereBeauvais.png";
    banniere.id="logo"
    return banniere;
}
CreateNavBar();


//apparition bg navbar
document.addEventListener("scroll",()=>{
    
    if(window.scrollY>200){
        NavBar.classList.add("highLightNavBar");
        //NavBar.querySelectorAll("a").forEach((elt)=>{elt.style.color="aliceblue"});
        NavBar.querySelector("#meteo").style.filter="invert(100%)"; 
        //NavBar.querySelectorAll("a").forEach((elt)=>{elt.style.color="aliceblue"});
        NavBar.style.transition="0.5s";
    }

    else{
        NavBar.classList.remove("highLightNavBar");
    }
})
//gere le responsive 
Hamburger.addEventListener("click",()=>{
    Hamburger.classList.toggle("active");
    NavBar.classList.toggle("active");
    console.log(document.querySelector(".active"))

})

window.addEventListener("resize",()=>{
    const WindowWidth=window.innerWidth;
    const WindowHeight=window.innerHeight;

})
