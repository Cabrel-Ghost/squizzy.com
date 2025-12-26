const searchbar= document.getElementById("searchbar")
searchbar.onclick=function(){
    searchbar.style.width="90%";
}

const stickypoint=document.getElementById("stickypoint");
const bypasspoint=stickypoint.offsetTop;
const stickyelement=document.getElementById("searchconteneur");

window.onscroll=function(){

    if(window.pageYOffset >= bypasspoint){
        stickyelement.classList.add("stickyprop");
    }
    else{
        stickyelement.classList.remove("stickyprop");
    }
}
const dot= document.getElementById("dot")
const btnone=document.getElementById("btn1")
const btntwo=document.getElementById("btn2")
const themectn=document.getElementById("themectn")
const boxctns=document.querySelectorAll(".boxctn");
const boxs=document.querySelectorAll(".box");
const body=document.getElementById("body")
const headings=document.querySelectorAll("h3,h1,h4")
const input=document.getElementById("input")
dot.onclick=function(){
 themectn.style.display="block";
    btnone.onchange=function(){
        if(btnone.checked){
            body.style.backgroundColor=" rgb(47, 46, 46)";
            searchbar.style.backgroundColor=" rgb(78, 74, 74)";
            input.style.color="white";
            boxs.forEach(function(allbox){
                allbox.style.cssText= "background-color:rgb(19, 16, 16);";
                
            })
            boxctns.forEach(function(allboxctn){
                
                allboxctn.style.backgroundColor="rgb(78, 74, 74)";
                
            })
            
           headings.forEach(function(allheadings){
                allheadings.style.color="white";
           }) 
           themectn.style.display="none";
        }
      
    }
    btntwo.onchange=function(){
        if(btntwo.checked){
            body.style.backgroundColor="white";
            searchbar.style.backgroundColor="rgba(241, 234, 241, 1)";
            input.style.color="black";
            boxs.forEach(function(allbox){
                allbox.style.cssText= "background-color:rgba(241, 234, 241, 1);";
                
            })
            boxctns.forEach(function(allboxctn){
                
                allboxctn.style.backgroundColor="white";
                
            })
            
           headings.forEach(function(allheadings){
                allheadings.style.color="black";
           })
            
           themectn.style.display="none";   
        } 
   }
}