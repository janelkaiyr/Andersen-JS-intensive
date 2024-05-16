/* In the center of the page there is a button that says Click me!
 When you hover over it with a 50% probability, it disappears and appears in a random place. 
 When clicked, it does the same with 100% probability.*/

const button = document.querySelector('#clickMeButton');

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function shouldDisappear() {
    const probability = Math.random() < 0.5;
    if (probability) {
        buttonDisappear();
    }
}
function buttonDisappear() {
    button.style.visibility = 'hidden';
    const screenWidth = window.innerWidth - button.offsetWidth;
    const screenHeight = window.innerHeight - button.offsetHeight;
    const randomX = getRandomNumber(0, screenWidth);
    const randomY = getRandomNumber(0, screenHeight);
    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
    setTimeout(() => {
        button.style.visibility = 'visible';
    }, 1000);
}

button.addEventListener('mouseover', shouldDisappear);
button.addEventListener('click', buttonDisappear);