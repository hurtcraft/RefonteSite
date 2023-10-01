const navBar=document.getElementById("NavBar");
function getMeteo(){
    const divMeteo=document.createElement("div");
    divMeteo.innerText="meteo";
    divMeteo.id="meteo";
    navBar.appendChild(divMeteo);
}
getMeteo();