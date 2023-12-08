const mathButton = document.getElementById('learn-maths-button-image');
const readButton = document.getElementById('learn-to-read-button');
const blurEffect = document.getElementById('blur-effect');
const amongUsButton = document.getElementById('among-us-button');
const amongUsButtonBackground = document.getElementById('among-us-button-background');
const amongYellow = document.getElementById('among-us-yellow');
const amongUsText = document.getElementById('among-us-text');
const chooseGradeSection = document.getElementById('choose-grade-section');
const homeSection = document.getElementById('home-section');
const blackboardSection = document.getElementById('blackboard-section');
const preschoolButton = document.getElementById('preschool-button');
const kindergartenButton = document.getElementById('kindergarten-button');
const gradeschoolButton = document.getElementById('gradeschool-button');



function mathButtonClicked() {
    homeSection.style.opacity = 0;
    homeSection.style.pointerEvents = 'none';
    blackboardSection.style.top = '0vw';
    chooseGradeSection.style.opacity = 1;
    chooseGradeSection.style.pointerEvents = 'auto';
}

function backToHomeButton() {
    homeSection.style.opacity = 1;
    homeSection.style.pointerEvents = 'auto';
    homeSection.style.transition = 'opacity 0.5s ease';
    blackboardSection.style.top = '50vw';
    chooseGradeSection.style.opacity = 0;
    chooseGradeSection.style.pointerEvents = 'none';
}



//PreSchool Button
preschoolButton.addEventListener('mouseover', function() {
    preschoolButton.style.marginTop = '0.15vw';
    preschoolButton.style.border = '0.2vw solid rgba(255, 255, 255, 1)';
    preschoolButton.style.backgroundColor = 'rgba(123, 123, 123, 0.9)';
    kindergartenButton.style.marginLeft = '1.6vw';
    gradeschoolButton.style.marginRight = '0.15vw';
    kindergartenButton.style.opacity = '0.4';
    gradeschoolButton.style.opacity = '0.4';
});

preschoolButton.addEventListener('mouseout', function() {
    preschoolButton.style.marginTop = '1.3vw';
    preschoolButton.style.border = '0.01vw solid rgba(255, 255, 255, 0.5)';
    preschoolButton.style.backgroundColor = 'rgba(123, 123, 123, 0.4)';
    kindergartenButton.style.marginLeft = '0vw';
    gradeschoolButton.style.marginRight = '0.7vw';
    kindergartenButton.style.opacity = '1';
    gradeschoolButton.style.opacity = '1';
});



//Kindergarten Button
kindergartenButton.addEventListener('mouseover', function() {
    kindergartenButton.style.marginTop = '0.15vw';
    kindergartenButton.style.border = '0.2vw solid rgba(255, 255, 255, 1)';
    kindergartenButton.style.backgroundColor = 'rgba(123, 123, 123, 0.9)';
    preschoolButton.style.marginLeft = '0.15vw';
    gradeschoolButton.style.marginRight = '0.15vw';
    gradeschoolButton.style.opacity = '0.4';
    preschoolButton.style.opacity = '0.4';
});

kindergartenButton.addEventListener('mouseout', function() {
    kindergartenButton.style.marginTop = '1.3vw';
    kindergartenButton.style.border = '0.01vw solid rgba(255, 255, 255, 0.5)';
    kindergartenButton.style.backgroundColor = 'rgba(123, 123, 123, 0.4)';
    preschoolButton.style.marginLeft = '0.7vw';
    gradeschoolButton.style.marginRight = '0.7vw';
    gradeschoolButton.style.opacity = '1';
    preschoolButton.style.opacity = '1';
});




//Grade School Button
gradeschoolButton.addEventListener('mouseover', function() {
    gradeschoolButton.style.marginTop = '0.15vw';
    gradeschoolButton.style.border = '0.2vw solid rgba(255, 255, 255, 1)';
    gradeschoolButton.style.backgroundColor = 'rgba(123, 123, 123, 0.9)';
    preschoolButton.style.marginLeft = '0.15vw';
    kindergartenButton.style.marginLeft = '-1.6vw';
    preschoolButton.style.opacity = '0.4';
    kindergartenButton.style.opacity = '0.4';
    // gradeschoolButton.style.marginRight = '0.15vw';
    // gradeschoolButton.style.opacity = '0.4';
});

gradeschoolButton.addEventListener('mouseout', function() {
    gradeschoolButton.style.marginTop = '1.3vw';
    gradeschoolButton.style.border = '0.01vw solid rgba(255, 255, 255, 0.5)';
    gradeschoolButton.style.backgroundColor = 'rgba(123, 123, 123, 0.4)';
    preschoolButton.style.marginLeft = '0.7vw';
    kindergartenButton.style.marginLeft = '0vw';
    preschoolButton.style.opacity = '1';
    kindergartenButton.style.opacity = '1';
    // gradeschoolButton.style.marginRight = '0.7vw';
    // gradeschoolButton.style.opacity = '1';
});

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