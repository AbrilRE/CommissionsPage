var modal = document.getElementById("modal2");
var modalImg = document.getElementById("gallery-image");
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

var img = document.getElementById("gallery-image1");
expandImg();

var img = document.getElementById("gallery-image2");
expandImg();

var img = document.getElementById("gallery-image3");
expandImg();

var img = document.getElementById("gallery-image4");
expandImg();

var img = document.getElementById("gallery-image5");
expandImg();

var img = document.getElementById("gallery-image6");
expandImg();

var img = document.getElementById("gallery-image7");
expandImg();

var img = document.getElementById("gallery-image8");
expandImg();

var img = document.getElementById("gallery-image9");
expandImg();

var img = document.getElementById("gallery-image10");
expandImg();

var img = document.getElementById("gallery-image11");
expandImg();

var img = document.getElementById("gallery-image12");
expandImg();

var img = document.getElementById("gallery-image13");
expandImg();

var img = document.getElementById("gallery-image14");
expandImg();

var img = document.getElementById("gallery-image15");
expandImg();

var img = document.getElementById("gallery-image16");
expandImg();
