function result(){
let inputValue = document.getElementById('inputData').value;

console.log(inputValue);

let displayHeading = document.getElementById('text');

displayHeading.innerHTML = inputValue;

displayHeading.style.color = "red";

document.getElementsByTagName('body')[0].style.backgroundColor = "green";
}

let paraBkg = document.getElementById('para');

function colorChange(){
    paraBkg.style.backgroundColor = "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
}

paraBkg.addEventListener('mouseout', colorChange);