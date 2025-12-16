const bar= document.getElementById("bar")
const conteneur= document.getElementById("barconteneur")
const button= document.getElementById("slidebtn")
    button.onclick=function(){
        conteneur.style.width="80%";
        bar.style.width= "100%";
    }
const back= document.getElementById("backslide")
    back.onclick=function(){
        conteneur.style.width="0";
        bar.style.width="0";
    }
