//alert button event 
const btnAlert = document.getElementById('mybutton');

function btnClick() {
    alert("Button clicked")
};

btnAlert.addEventListener('click', btnClick);

//background button event
const btnBackground = document.getElementById('colorbutton');
const bodyTag = document.getElementById('bodyTag');

/*
function changeColor() {
    bodyTag.classList.add('red-background');
}

btnBackground.addEventListener('click', changeColor);
*/

function toggleColor() {
    bodyTag.classList.toggle('red-background');
}

btnBackground.addEventListener('click', toggleColor);