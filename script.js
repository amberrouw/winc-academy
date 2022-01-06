
const btnToggle = document.getElementById('btnToggle');
const homeBtn = document.getElementById('home');
const greyBtn = document.getElementById('grey');
const sandBtn = document.getElementById('sand');
const blueBtn = document.getElementById('blue');
const bodyTag = document.getElementById('bodyTag');
const divText = document.getElementById('text');

let toggleNavStatus = false;

let getNavToggle = document.querySelector(".nav-toggle");
let getNavToggleUl = document.querySelector(".nav-toggle ul");

function navToggle() {
    if (toggleNavStatus === false) {
        getNavToggle.style.width = "200px";
        getNavToggle.style.height = "290px";
        getNavToggleUl.style.visibility = "visible";
        divText.style.visibility = "hidden";
        toggleNavStatus = true;

    } else if (toggleNavStatus === true) {
        getNavToggle.style.height = "0px";
        getNavToggle.style.width = "0px";
        getNavToggleUl.style.visibility = "hidden";
        divText.style.visibility = "visible";
        toggleNavStatus = false;
    }
}

btnToggle.addEventListener('click', navToggle)

function homeColor () {
    document.body.style.backgroundColor = "#F8F8F8";
    divText.innerHTML = 'This is color is: off white'
    navToggle()
}

homeBtn.addEventListener('click', homeColor);

function greyColor () {
    document.body.style.backgroundColor= "#464246";
    divText.innerHTML = 'This is color is: grey'
    navToggle()
}

function sandColor () {
    document.body.style.backgroundColor= "#CABCB0";
    divText.innerHTML = 'This is color is: sand'
    navToggle()
}

function blueColor () {
    document.body.style.backgroundColor= "#A5B9B9";
    divText.innerHTML = 'This is color is: blue'
    navToggle()
}

homeBtn.addEventListener('click', homeColor);
greyBtn.addEventListener('click', greyColor);
sandBtn.addEventListener('click', sandColor);
blueBtn.addEventListener('click', blueColor);