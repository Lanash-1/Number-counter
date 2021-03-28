const displayNumber = document.querySelector(".display");
// console.log(displayNumber);

const decreaseButton = document.querySelector(".decrease");
const resetButton = document.querySelector(".reset");
const increaseButton = document.querySelector(".increase");
// console.log(decreaseButton);


let number = 0;

decreaseButton.addEventListener('click', () => {
    number--;
    displayNumber.innerHTML = number;
})

increaseButton.addEventListener('click', () => {
    number++;
    displayNumber.innerHTML = number;
})

resetButton.addEventListener('click', () => {
    number = 0;
    displayNumber.innerHTML = number;
})

