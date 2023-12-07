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

//function to work on single page product functionality
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('product-layout').style.display = 'none'

});
function productListDisplay(){
    console.log('second function');
    document.getElementById('products-display').style.display = 'block';
    document.getElementById('product-layout').style.display = 'none';
}
function productDisplay(){
    document.getElementById('products-display').style.display = 'none'
    document.getElementById('product-layout').style.display = 'block'
}

function size_clicked(clkid){
    console.log(clkid.id);
    console.log(clkid.name +'='+ clkid.value);
    var element = document.getElementById(clkid.id);
    var buttons = document.querySelectorAll('.size-btn');
    buttons.forEach(function(button) {
        button.classList.remove('selected');
    });
    if (element) {

        element.classList.toggle("selected");
    } else {
        console.error("Element not found with ID: " + clkid);
    }
}