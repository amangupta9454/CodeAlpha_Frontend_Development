var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");
var images = document.querySelectorAll(".img-gallery img"); 
var currentIndex = 0; 

function openFullImg(pic, index){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
    currentIndex = index; 
    updateCounter(); 
}

function closeFullImg(){
    fullImgBox.style.display = "none";
}
function updateCounter() {
    const counterText = document.getElementById("imageCounter");
    counterText.innerHTML = `Image ${currentIndex + 1} of ${images.length}`;
}

document.addEventListener('keydown', function(event) {
    if (fullImgBox.style.display === "flex") {
        if (event.key === 'ArrowRight') {
            nextImage();
        } 
        else if (event.key === 'ArrowLeft') {
            prevImage();
        }
    }
});

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    openFullImg(images[currentIndex].src, currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    openFullImg(images[currentIndex].src, currentIndex);
}

fullImgBox.addEventListener('click', function(event) {
    if (event.target === fullImgBox) {
        closeFullImg();
    }
});
