const NavBar=document.getElementById("NavBar");
const NavBarContent=document.getElementById("NavBarContent");
function CreateNavBar(){
    const lstBtnSections= ["Accueil","Transport","Activites","Ecologie","Plan Climat","Economie","Habitat","Politique de la Ville"];
    NavBar.appendChild(getBanniere());
    let link;
    for(let i=0;i<lstBtnSections.length;i++){
        link=document.createElement("a");
        link.textContent=lstBtnSections[i];
        link.classList.add("btnMenu")
        if(i<=3){
            link.href=lstBtnSections[i].concat(".html");
        }
        else{
            link.href="pageConstruction.html";
        }
        
        
        NavBar.appendChild(link);
    }
    addImageNavBarContainer();
}
function addImageNavBarContainer(){
    let img = new Image();
    img.src="../img/imageTampon.jpg";
    img.id="imgTampon"
    NavBarContent.appendChild(img);

}
function getBanniere(){
    let banniere=new Image();
    banniere.src="../img/banniereBeauvais.png";
    banniere.id="banniere"
    return banniere;
}
CreateNavBar();
