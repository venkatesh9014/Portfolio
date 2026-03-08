function openImage(src) {
    document.getElementById("imgPopup").style.display = "flex";
    document.getElementById("popupImg").src = src;
}

function closeImage() {
    document.getElementById("imgPopup").style.display = "none";
}
