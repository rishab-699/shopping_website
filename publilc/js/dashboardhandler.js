var currentActiveNavId;

window.addEventListener("load", function() {
    console.log("Page has finished loading!");
    var currentId=document.getElementsByClassName("active")[0];
    console.log(currentActiveNavId);
    if (currentId) {
        
        currentActiveNavId = currentId.id;
        navclick(currentActiveNavId , "load");
      }else{
        navclick("home-Text" , "load");
      }
  });


function navclick(navid, status){
    let optionid;
    
        optionid = navid.id;
    if(status === "load"){
        navid = document.getElementById(navid);
        optionid = navid.id
    }
    let navIDs = ["home-Text","Product-text", "order-text","payment-text"];
    let dashSection = ["home","products","orders","payments"]
    document.getElementById(optionid).classList.add("active");
    for(i=0; i<navIDs.length; i++){
        if(navIDs[i]!= optionid){
            document.getElementById(navIDs[i]).classList.remove("active");
            document.getElementById(dashSection[i]).style.display = "none";
        }else{
            document.getElementById(dashSection[i]).style.display = "block";
        }
    }
    currentActiveNavId = optionid; 
    
}

