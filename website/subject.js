 const spinner=document.getElementById("spinner")
       const loadingpage=document.getElementById("loadingpage")
        const subject=document.querySelectorAll("li");
        subject.forEach(function(selct){
           
            selct.onclick=function(){
                let valid = true;
                const yearinput=window.prompt("enter the GCE year 😅").trim();
                if(yearinput.length===4 && !isNaN(yearinput) && yearinput>=2000 && yearinput<=2025 ){
                     
                    while(valid){
                           const paperinput=window.prompt("paper 1, 2 or 3 ?")
                        if(paperinput=="1" || paperinput=="2" || paperinput=="3"){
                           
                            loadingpage.style.display="flex"
                                    spinner.style.animation="spin linear 0.6s infinite"
                                    let percentage=0;
                                    const counter=document.getElementById("counter")
                                    const range=setInterval(()=>{
                                        counter.textContent=percentage+"%";
                                        percentage++ ;
                                        if(percentage>100){
                                            clearInterval(range);
                                            spinner.style.animation="none"
                                            loadingpage.style.display="none"
                                             window.location.href = "pdf.html";
                                        }
                                    },20)
                            valid = false;
                            
                        }
                        else if(paperinput==null){
                            valid=false;
                        }
                        else{
                            
                            alert("please enter the right paper number :")
                            valid = true;
                        }
                    }
                    
                }
                else{
                    alert("sorry and error was made enter a year between 2000-2025 please:");
                }
            }

        })
        
        