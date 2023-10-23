const NavBar=document.getElementById("NavBar");
const NavBarContainer=document.getElementById("NavBarContainer");
const Bannieres=document.querySelectorAll('.banniere')
const Hamburger=document.getElementById("hamburger");


const Observer=new IntersectionObserver((entries)=>{
    for(const entry of entries){
        let arrow;
        let contents=entry.target.querySelector(".banniereContent");
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


function CreateNavBar(){
    const lstBtnSections= ["","Accueil","Transport","Activites","Ecologie","Plan Climat","Economie","Habitat","Politique de la Ville"];
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
        NavBar.style.transition="0.5s";
        NavBar.querySelector("#meteo").style.filter="invert(100%)"; 
        
    }

    else{
        NavBar.classList.remove("highLightNavBar");
    }
})
//gere le responsive 
Hamburger.addEventListener("click",()=>{
    Hamburger.classList.toggle("active");
    NavBar.classList.toggle("active");

})

window.addEventListener("resize",()=>{
    const WindowWidth=window.innerWidth;
    const WindowHeight=window.innerHeight;

})
