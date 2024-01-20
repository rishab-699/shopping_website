function formValidate(event) {
    console.log('add product form submitted');
    let productImgInput = document.getElementsByName("filetoupload[]")[0];
    let productImgFiles = productImgInput.files;
    for (let i = 0; i < productImgFiles.length; i++) {
        let productImg = productImgFiles[i];
        console.log('File ' + (i + 1) + ':', productImg.name);
        console.log('File Type' + (i+1) + ':', productImg.type);
        if((productImg.type == "image/png")||(productImg.type == "image/jpg")||(productImg.type == "image/jpeg")){
          console.log('filename confirmation:',productImg.name);
      }
      else{
        document.getElementById("fileNamesErr").innerHTML = "Uploaded file must be JPG/ PNG OR JPEG format"
        document.getElementById("fileNamesErr").style.display = "contents";
        return false;
      }
    } 

    let product_title = document.getElementById("product-title").value;
    let product_desc = document.getElementById("product-desc").value;
    let qty = document.getElementById("qty").value;
    let price = document.getElementById("price").value;
    let cloth = document.getElementById("cloth").value;
    let category = document.getElementById("category").value;
    let desc_title = document.getElementsByName("description-Title[]");
    let desc = document.getElementsByName("description[]");
    let size = document.getElementsByName("size[]");
    for(let i=0; i<size.length; i++){
      if(size[i].checked == true){
      console.log('Size:',size[i].value);
      }
    }
    for(let i = 0; i<desc_title.length; i++){
      console.log(desc_title[i].value,":",desc[i].value);
    }
    return true;
  }