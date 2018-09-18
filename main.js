var images = document.getElementsByTagName("a");
var divs = document.getElementById("divs-wrapper").getElementsByTagName("div");
var i = 0;
divs[1].style.display="block";
function selfChangeImage(){
    if(i !== 0){
        images[(i-1)%12].classList.remove("outleft");
    }
    images[(i)%12].classList.remove("show","left");
    images[(i)%12].classList.add("outleft","change");
    images[(i+1)%12].classList.add("left","change");
    images[(i+2)%12].classList.remove("right");
    images[(i+2)%12].classList.add("change");
    images[(i+3)%12].classList.remove("outright");
    images[(i+3)%12].classList.add("show","right","change");
    images[(i+4)%12].classList.add("outright");
    divs[(i+1)%12].style.display="none";
    divs[(i+2)%12].style.display="block";
    i++
}
setInterval(selfChangeImage,2000);
