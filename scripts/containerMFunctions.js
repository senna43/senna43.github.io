const viewmore = window.document.getElementById("viewMore");

viewmore.addEventListener("click", function () {
    viewmore.style.display = "none";
    ocult = window.document.getElementById("contentOcult");
    ocult.style.display = "block"    
})