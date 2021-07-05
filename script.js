const filterImg = document.querySelectorAll(".image");

window.onload = ()=>{
    for (let index = 0; index < filterImg.length; index++) {
        filterImg[index].setAttribute("onclick", "preview(this)");
    }
}



const previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon");

function preview(element) {
    let selectedPrevImg = element.querySelector("img").src;
    previewImg.src = selectedPrevImg
    previewBox.classList.add("show");
    closeIcon.onclick = ()=>{
        previewBox.classList.remove("show");
    }
}

