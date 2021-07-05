var modal = document.getElementById("modal-gallery");
var modalImg = document.getElementById("image-gallery");
var captionText = document.getElementById("caption");
var expandImg;

expandImg = function () {
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };

  var span = document.getElementsByClassName("close")[1];
  span.onclick = function () {
    modal.style.display = "none";
  };
};

var img = document.getElementById("image-gallery1");
expandImg();

var img = document.getElementById("image-gallery2");
expandImg();

var img = document.getElementById("image-gallery3");
expandImg();

var img = document.getElementById("image-gallery4");
expandImg();

var img = document.getElementById("image-gallery5");
expandImg();

var img = document.getElementById("image-gallery6");
expandImg();

var img = document.getElementById("image-gallery7");
expandImg();

var img = document.getElementById("image-gallery8");
expandImg();

var img = document.getElementById("image-gallery9");
expandImg();

var img = document.getElementById("image-gallery10");
expandImg();

var img = document.getElementById("image-gallery11");
expandImg();

var img = document.getElementById("image-gallery12");
expandImg();

var img = document.getElementById("image-gallery13");
expandImg();

var img = document.getElementById("image-gallery14");
expandImg();

var img = document.getElementById("image-gallery15");
expandImg();

var img = document.getElementById("image-gallery16");
expandImg();
