

// Get the name parameter from the URL
function getURLParameter(name) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Update the My Dear line with the entered name
function updateMyDear() {
    var name = getURLParameter('name');
    if (name) {
        document.getElementById('myDear').textContent = "My Dear " + name;
    }
}

// Add a class to the body for transition effect
function showLoadingScreen() {
    var loadingScreen = document.getElementById("loadingScreen");
    loadingScreen.classList.add("transitioning");

    // Remove the class after a delay
    setTimeout(function () {
        loadingScreen.classList.remove("transitioning");
    }, 1000); // Adjust the delay as needed
}

var allowNoButtonClick = true;

function moveNoButton() {
    if (allowNoButtonClick) {
        var noButton = document.getElementById("noButton");

        // Define the boundaries for the square area
        var squareSize = 20; // Adjust this value based on your requirements
        var maxX = window.innerWidth - squareSize;
        var maxY = window.innerHeight - squareSize;

        // Generate random X and Y coordinates within the square area
        var randomX = Math.random() * (maxX - squareSize);
        var randomY = Math.random() * (maxY - squareSize);

        noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }
}

function preventClick() {
    if (allowNoButtonClick) {
        alert("You clicked 'No', but you need to click 'Yes' first!");
    }
}

function allowClick() {
    allowNoButtonClick = false;
    var noButton = document.getElementById("noButton");
    noButton.style.transform = "translate(0)";

    // Add a class to the body for fade-out transition
    document.body.classList.add('fade-out');

    // Wait for the fade-out transition to complete before redirection
    setTimeout(function () {
        // Redirect to the new date_page.html
        window.location.href = "date_page.html";
    }, 1); // Adjust the delay to match the fade-out transition duration (in milliseconds)
}


// Start playing the audio when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    startAudio();
    // Call the function to update My Dear when the page loads
    updateMyDear();
});

// Function to start audio
function startAudio() {
    var audio = document.getElementById("backgroundAudio");
    if (audio) {
        audio.muted = false;
        audio.play();
    }
}

// Form submission logic
function submitForm() {
    // Get value from the name input
    var nameInput = document.getElementById("nameInput");
    var name = nameInput.value.trim();

    // Check if the name is not empty
    if (name === "") {
        alert("Please enter your partner's name.");
        nameInput.focus();
        return;
    }

    // Redirect to home.html with the entered name in the URL after the fade-out
    setTimeout(function () {
        window.location.href = "home.html?name=" + encodeURIComponent(name);
    }, 500); // Adjust the delay as needed
}

function fadeOutAndRedirect() {
    // Add the fade-out class to the body
    document.body.classList.add('fade-out');

    // Redirect to the desired page after a short delay
    setTimeout(function () {
        window.location.href = "home.html"; // Change the URL as needed
    }, 1000); // Adjust the delay as needed
}


// date_page.js

// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Add the fade-in class to the body after a short delay
    setTimeout(function () {
        document.body.classList.add('fade-in');
    }, 500); // Adjust the delay as needed
});
