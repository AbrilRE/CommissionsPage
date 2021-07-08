/*Refactoriced by Luis Daniel aka Naoko */

let modal = document.getElementById("modal2")
let modalImg = document.getElementById("gallery-image")
let captionText = document.getElementById("caption")
let expandImg
let clipBoard1 = new ClipboardJS('#copy')

expandImg = function (id) {
  const img = document.getElementById(id);
  modal.style.display = "block"
  modalImg.src = img.src
  captionText.innerHTML = img.alt
  const span = document.getElementsByClassName("close")[1];
  span.onclick = function () {
    modal.style.display = "none";
  }
}

function change(src, type) {
  if (type === 'icon') document.getElementById("main-image").src = src
  else if (type === 'half') document.getElementById("main-image2").src = src
  else if (type === 'full') document.getElementById("main-image3").src = src
}

