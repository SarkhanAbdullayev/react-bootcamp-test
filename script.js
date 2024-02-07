// Task 1: Change the color of the greeting text

const title = document.querySelector('#greeting');

document.getElementById('colorButton').addEventListener('click', function() {
    title.style.color = getRandomColor();
});

// Task 2: Change the text content of the greeting
document.getElementById('textButton').addEventListener('click', function() {
    changeElementText(title, 'Hello, JavaScript!');
});

// Helper function for generating a random color (Complete for the applicant)
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// function for changing text of element
function changeElementText(element, text) {
    element.innerHTML = text;
}
