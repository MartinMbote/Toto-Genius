const mathButton = document.getElementById('learn-maths-button-image');
const readButton = document.getElementById('learn-to-read-button');
const blurEffect = document.getElementById('blur-effect');
const amongUsButton = document.getElementById('among-us-button');
const amongUsButtonBackground = document.getElementById('among-us-button-background');
const amongYellow = document.getElementById('among-us-yellow');
const amongUsText = document.getElementById('among-us-text');

//mouseover event listener (start) to amongUsButton
amongUsButton.addEventListener('mouseover', function() {
    amongUsButtonBackground.style.width = '22vw';
    amongUsButtonBackground.style.height = '3.7vw';
    amongUsButtonBackground.style.bottom = '3.3vw';
    amongYellow.style.transform = 'scale(1.1)';
    amongYellow.style.right = '2.9vw';
    amongUsText.style.right = '9vw';
    amongUsText.style.bottom = '0.5vw';
    amongUsText.style.fontSize = '2.8vw';
});

//mouseout event listener (end) to amongUsButton
amongUsButton.addEventListener('mouseout', function() {
    amongUsButtonBackground.style.width = '6.6vw';
    amongUsButtonBackground.style.height = '7.8vw';
    amongUsButtonBackground.style.bottom = '1.2vw';
    amongYellow.style.transform = 'scale(1)';
    amongYellow.style.right = '2.5vw';
    amongUsText.style.right = '4vw';
    amongUsText.style.bottom = '4.3vw';
    amongUsText.style.fontSize = '0.5vw';
});
    
//mouseover event listener to mathButton
mathButton.addEventListener('mouseover', function() {
    blurEffect.style.opacity = '1';
});
    
//mouseout event listener to mathButton
mathButton.addEventListener('mouseout', function() {
    blurEffect.style.opacity = '0';
});

//mouseover event listener to readButton
readButton.addEventListener('mouseover', function() {
    blurEffect.style.opacity = '1';
});
    
//mouseout event listener to readButton
readButton.addEventListener('mouseout', function() {
    blurEffect.style.opacity = '0';
});