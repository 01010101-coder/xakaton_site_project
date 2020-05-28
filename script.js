let firstButton = document.querySelector('.first');
let descriptionFirst = document.querySelector('.functionDescriptionFirst');
firstButton.addEventListener('click', function(evt){
    evt.preventDefault();
    descriptionFirst.classList.toggle('hidden');
});


let secondButton = document.querySelector('.second');
let descriptionSecond = document.querySelector('.functionDescriptionSecond');
secondButton.addEventListener('click', function(evt){
    evt.preventDefault();
    descriptionSecond.classList.toggle('hidden');
});


let thirdButton = document.querySelector('.third');
let descriptionThird = document.querySelector('.functionDescriptionThird');
thirdButton.addEventListener('click', function(evt){
    evt.preventDefault();
    descriptionThird.classList.toggle('hidden');
});


let fourthButton = document.querySelector('.forth');
let descriptionFourth = document.querySelector('.functionDescriptionFourth');
fourthButton.addEventListener('click', function(evt){
    evt.preventDefault();
    descriptionFourth.classList.toggle('hidden');
});