var currentActiveNavId;

window.addEventListener("load", function() {
    console.log("Page has finished loading!");
    currentActiveNavId=localStorage.getItem("currentActiveNavId")
    localStorage.clear();
    console.log(currentActiveNavId);
    if (currentActiveNavId != "") {
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
    localStorage.setItem("currentActiveNavId", optionid); 
    
}

function addProduct(){
    console.log("Add Product Card")
    document.getElementById("product-form").classList.replace("addProductNone","addProduct");
}
function shipment(){
    console.log("Add shipment Card")
    document.getElementById("Shipment-form").classList.replace("addProductNone","addProduct");
}
function closeshipment(){
    console.log("Add Product Card Close")
    document.getElementById("Shipment-form").classList.replace("addProduct","addProductNone");

}
function descriptionCategories(){
    var element = '<div class="inputGroup"><input type="text" name="description-Title[]" id="description-Title" placeholder="description-Title" class="textInput"/><input type="text" name="description[]" id="description" placeholder="description" class="textInput"/></div>';
    console.log('category btn clicked');
    document.getElementById('descCategories').insertAdjacentHTML('beforeend', element)
}

function closeAddProduct(){
    console.log("Add Product Card Close")
    document.getElementById("product-form").classList.replace("addProduct","addProductNone");

}

function orderDetailView(){
    document.getElementById("order-details").classList.add("order-detailView");
    document.getElementById("customer-details").classList.remove("order-detailView");
}
function customerDetailBack(){
    document.getElementById("customer-details").classList.add("order-detailView");
    document.getElementById("order-details").classList.remove("order-detailView");
}

function triggerFileInput() {
    document.getElementById('productImg').click();
}

document.getElementById('productImg').addEventListener('change', handleFileSelect);

function handleFileSelect(event) {
    const file = event.target.files;
    
    if (file) {
        for (let i = 0; i < file.length; i++) {
            if((file[i].type == "image/png")||(file[i].type == "image/jpg")||(file[i].type == "image/jpeg")){
                console.log('Selected file ' + (i + 1) + ':', file[i].name);
            html = '<li>'+file[i].name+'</li>';
            document.getElementById('filenames').insertAdjacentHTML('beforeend',html);
            }
            else{
                document.getElementById("fileNamesErr").innerHTML = "Uploaded file must be JPG/ PNG OR JPEG format"
                console.log('File Type' + (i+1) + ':', file[i].type)
            }
        }
    }
}
function sizeBtn(sizeid,size){
    console.log(size)
    console.log(sizeid.id);
    console.log(size);
    if(sizeid.checked){
        console.log(sizeid.id,': CHECKED')
        document.getElementById(size).classList.add("size-checked");
    }else{
        console.log('unchecked')
        document.getElementById(size).classList.remove("size-checked");
    }
    
}