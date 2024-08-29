// element by Id
document.getElementById('i-h1').style.backgroundColor = "red";

// elemtnt by Tag 
let headers = document.getElementsByTagName("h1");
for (let i = 0; i < 1; i++) {
    headers[i].style.backgroundColor = "red";
};

// element by class 
let demo = document.getElementsByClassName('c-h1')[0]
demo.style.backgroundColor = "purple"

//  class
document.querySelector('.c-p').style.backgroundColor = "violet"

// Id 
document.querySelector('#i-p').style.backgroundColor = "violet"

// Tag 

document.querySelector('p').style.backgroundColor = "violet"

// all selector
let qas = document.querySelectorAll('span')[0]
qas.style.backgroundColor = "black"