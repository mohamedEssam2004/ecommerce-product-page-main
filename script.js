const mainImg = document.getElementById("big-img");
const smallImg = document.getElementsByClassName("small-img");

for (let i = 0; i < smallImg.length; i++) {
    smallImg[i].onclick = function () {
        mainImg.src = smallImg[i].src;
    }
}


const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const numOfPiece = document.getElementById("numOfPiece");

plus.onclick = () => numOfPiece.innerHTML = +numOfPiece.innerHTML + 1;
minus.onclick = function () {
    if (+numOfPiece.innerHTML > 0) {
        numOfPiece.innerHTML = numOfPiece.innerHTML - 1;
    }
}


document.querySelector(".card-space").setAttribute("data-count", numOfPiece.innerHTML);
const cartIcon = document.getElementById("cardIcon");
const cartIconPlace = document.getElementById("cartNotification");

cartIcon.onclick = function () {
    cartIconPlace.classList.toggle("open");
}


const cartBtn = document.getElementById("cart-btn");
const cartContent = document.querySelector(".cart .content");
let x = false;
cartBtn.onclick = function () {
    if (+numOfPiece.innerHTML > 0 && x == false) {
        x = true;
        // create the image
        let parentProImg = document.createElement("div");
        let proImg = document.createElement("img");
        proImg.src = "./images/image-product-1-thumbnail.jpg";
        parentProImg.appendChild(proImg);
        cartContent.appendChild(parentProImg);

        // create product infodmation
        let parentProInfo = document.createElement("div");
        let proInfo = document.createElement("h4");
        proInfo.textContent = "Fall Limited Edition Sneakers";
        parentProInfo.appendChild(proInfo);

        let proPrice = document.createElement("h4");
        let thePrice = "$125.00";
        let proNum = +numOfPiece.innerHTML;
        let fPrice = document.createElement("span");
        fPrice.setAttribute("id", "fPrice");
        fPrice.textContent = "$" + parseInt(thePrice.slice(1)) * proNum;
        proPrice.textContent = `${thePrice} x ${proNum} `;
        proPrice.appendChild(fPrice);
        parentProInfo.appendChild(proPrice);
        cartContent.appendChild(parentProInfo);

        // create the delete icon
        let paretnProIcon = document.createElement("div");
        let deleteIcon = document.createElement("img");
        deleteIcon.onclick = function () {
            window.location.reload();
        }
        deleteIcon.src = "./images/icon-delete.svg";
        deleteIcon.setAttribute("id", "delete");
        paretnProIcon.appendChild(deleteIcon);
        cartContent.appendChild(paretnProIcon);

        // make the chackout button visible
        document.getElementById("checkout").style.display = "block";

        // make the empty pragraph invisible
        document.getElementById("empty").style.display = "none";

        // manage the Notification
        document.querySelector(".card-space").setAttribute("data-count", numOfPiece.innerHTML);
        document.querySelector(".card-space").classList.add("include");
    }
}




// the light box code
const mainLightImg = document.getElementById("lightbox-img");
const smallLightImg = document.getElementsByClassName("light-img");

const nextBtn = document.getElementById("next");
const previousBtn = document.getElementById("previous");

nextBtn.onclick = nextSlide;
previousBtn.onclick = previousSlide;

const lightBoxImg = Array.from(smallLightImg);
let lightImgCount = lightBoxImg.length;
let currentLightImg = 1;

function imgInBig() {
    lightBoxImg.forEach((img) => {
        img.parentElement.classList.remove("active");
    });

    lightBoxImg[currentLightImg - 1].parentElement.classList.add("active");
    mainLightImg.src = lightBoxImg[currentLightImg - 1].src;

    // disabled the next button
    if (currentLightImg == 1) {
        previousBtn.children[0].classList.add("disabled");
    } else {
        previousBtn.children[0].classList.remove("disabled");
    }
    // disabled the previous button
    if (currentLightImg == lightImgCount) {
        nextBtn.children[0].classList.add("disabled");
    } else {
        nextBtn.children[0].classList.remove("disabled");
    }
}

imgInBig();

// the next image
function nextSlide() {
    if (nextBtn.classList.contains("disabled")) {
        return false;
    } else {
        currentLightImg++;
        imgInBig();
    }
}
// the previous image
function previousSlide() {
    if (previousBtn.classList.contains("disabled")) {
        return false;
    } else {
        currentLightImg--;
        imgInBig();
    }
}

// manage the lightbox's delete and open buttons
const sliderContainer = document.getElementById("imageSlider");
const deleteLightBox = document.getElementById("deletelight");

mainImg.onclick = function () {
    sliderContainer.classList.add("open");
    document.querySelector("#backgroundSlider").classList.add("active");

}
deleteLightBox.onclick = function () {
    sliderContainer.classList.remove("open");
    document.querySelector("#backgroundSlider").classList.remove("active");
}


// deal with mobile menu
const menu = document.getElementById("menu");
menu.onclick = function () {
    document.querySelector(".backhover").classList.add("active");
    document.querySelector("nav ul").classList.add("show");
}
const close = document.getElementById("close");
close.onclick = function () {
    document.querySelector(".backhover").classList.remove("active");
    document.querySelector("nav ul").classList.remove("show");
}


// convey between images in small screen width (mobile)
const mobNext = document.getElementById("mobNext");
const mobPrevious = document.getElementById("mobPrevious");
let allImagesUrl = [
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg"
]

let allImagesLength = allImagesUrl.length;
let numImageOfAll = 2;

mobNext.onclick = getToNext;
mobPrevious.onclick = getToPrevious;

console.log(mobNext);
function showMobImage() {
    mainImg.src = allImagesUrl[numImageOfAll - 1];
}
// next image
function getToNext() {
    if (numImageOfAll == allImagesLength) {
        return false;
    } else {
        numImageOfAll++;
        showMobImage();
    }
}

// previous image
function getToPrevious() {
    if (numImageOfAll == 1) {
        return false;
    } else {
        numImageOfAll--;
        showMobImage();
    }
}
showMobImage();