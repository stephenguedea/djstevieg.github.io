"use strict";

// Modal Image Gallery
// function onClick(element) {
//     document.getElementById("img01").src = element.src;
//     document.getElementById("modal01").style.display = "block";
//     var captionText = document.getElementById("caption");
//     captionText.innerHTML = element.alt;
// }

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 5000);
}

var myCenterIndex = 0;
carouselCenter();

function carouselCenter() {
    var i;
    var x = document.getElementsByClassName("mySlidesCenter");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myCenterIndex++;
    if (myCenterIndex > x.length) {myCenterIndex = 1}
    x[myCenterIndex-1].style.display = "block";
    setTimeout(carouselCenter, 9000);
}

var myLeftIndex = 0;
carouselLeft();

function carouselLeft() {
    var i;
    var x = document.getElementsByClassName("mySlidesLeft");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myLeftIndex++;
    if (myLeftIndex > x.length) {myLeftIndex = 1}
    x[myLeftIndex-1].style.display = "block";
    setTimeout(carouselLeft, 8000);
}

var myRightIndex = 0;
carouselRight();

function carouselRight() {
    var i;
    var x = document.getElementsByClassName("mySlidesRight");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myRightIndex++;
    if (myRightIndex > x.length) {myRightIndex = 1}
    x[myRightIndex-1].style.display = "block";
    setTimeout(carouselRight, 7000);
}