const slides = document.querySelectorAll(".slide");
let counter = 0;

slides.forEach((slides,index)=>{
    htmlelement = "<div class='slide-pointer' id="+(index+1)+" onclick=slidefocus(this)></div>";
    document.getElementById('pointers').insertAdjacentHTML('beforeend',htmlelement);
})

const slideImage = ()=>{
    slides.forEach(
        (slides,index)=>{
            if ((index+1) === counter) {
                document.getElementById(counter).style.opacity = 1; // Show the current slide with fade-in animation
              } else {
                slides.style.opacity = 0; // Hide other slides with fade-out animation
              }
        }
    )
}
function slidefocus(data){
    console.log(data.id);
    document.getElementById(data.id).style.opacity = 1;
}
setInterval(()=>{
    if(counter>=slides.length){
        counter=1;
    }
    else{
        counter ++;
    }
    slideImage();
},3000)

let i = true
function profiletab(){
    if(i == true){
        document.getElementById('profiletab').className = 'profiletab'
        document.getElementById('profile').style.borderbottom = '2px solid #56700'
        i = false
    }else{
        document.getElementById('profiletab').className = 'profiletabhide'
        i = true;
    }
}