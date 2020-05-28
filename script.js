"use strict";
let teamButton = document.querySelector('.teamButton');
let mateFirst = document.querySelector('.mateFirst');
let mateSecond = document.querySelector(".mateSecond");
let mateThird = document.querySelector(".mateThird");
let mateFourth = document.querySelector(".mateFourth");
teamButton.addEventListener('click', function(evt){
    evt.preventDefault();
    mateFirst.classList.toggle('hidden');
    mateSecond.classList.toggle('hidden');
    mateThird.classList.toggle('hidden');
    mateFourth.classList.toggle('hidden');
});
